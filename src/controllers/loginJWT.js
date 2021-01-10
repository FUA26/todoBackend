bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const { logger } = require('../fuctions/log');
const { login } = require("../models/login")
let refreshTokens = []


module.exports ={
    login: (req,res,next)=>{
        const data = req.body.email;
        login(data,(err,cb)=>{
            if (err) {
                console.log(err)
            }

            if (cb === null) {
                let data = {
                    code: '00',
                    message: 'Username dan Pasword tidak sesuai'
                }
                logger(req,data)
                return res.status(200).json(data)
            } 


            let hash = cb[0].password;
            hash = hash.replace(/^\$2y(.+)$/i, '$2a$1');
            const cekPass = bcrypt.compare(req.body.password, hash, function(err, res) {
                
            });

            if (!cekPass) {
                const user = {name:cb[0].username}
                const aksesToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
                const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
                refreshTokens.push(refreshToken)
                let data = {
                    code: '00',
                    message: 'Login Succes!!',
                    data:{
                        accessToken: aksesToken,
                        refreshToken: refreshToken
                    }
                }
                logger(req,data)
                return res.status(200).json(data)
            } else {
                let data = {
                    code: '00',
                    message: 'Username dan Pasword tidak sesuai'
                }
                logger(req,data)
                return res.status(200).json(data)
            }
        })
    },
    refreshToken:(req, res) => {
        const refreshToken = req.body.token
        if (refreshToken == null) return res.sendStatus(401)
        if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
          if (err) return res.sendStatus(403)
          const accessToken = jwt.sign({ name: user.name }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '45s' })
          res.json({ accessToken: accessToken })
        })
    },
    logout: (req,res)=>{
        refreshTokens = refreshTokens.filter(token => token !== req.body.token)
        let data = {
            code: '00',
            message: 'LOGOUT'
        }
        logger(req,data)
        res.sendStatus(204)
    }
}