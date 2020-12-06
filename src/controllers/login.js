bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const { login } = require("../models/login")
let refreshTokens = []


module.exports ={
    login: (req,res,next)=>{
        const data = req.body.email;
        login(data,(err,cb)=>{
            if (err) {
                console.log(err)
            }
            let hash = cb[0].password;
            hash = hash.replace(/^\$2y(.+)$/i, '$2a$1');
            const cekPass = bcrypt.compare(req.body.password, hash, function(err, res) {
                
            });

            if (!cekPass) {
                const user = {name:cb[0].username}
                const aksesToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '45s' })
                const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
                refreshTokens.push(refreshToken)
                return res.status(200).json({
                    code: 00,
                    message: 'Login Succes!!',
                    data:{
                        accessToken: aksesToken,
                        refreshToken: refreshToken
                    }
                })
            } else {
                return res.status(200).json({
                    code: 00,
                    message: 'Username dan Pasword tidak sesuai'
                })
            }
        })
    },
    refreshToken:(req, res) => {
        const refreshToken = req.body.token
        if (refreshToken == null) return res.sendStatus(401)
        if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            console.log(user)
          if (err) return res.sendStatus(403)
          const accessToken = jwt.sign({ name: user.name }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '45s' })
          res.json({ accessToken: accessToken })
        })
    },
    logout: (req,res)=>{
        refreshTokens = refreshTokens.filter(token => token !== req.body.token)
        res.sendStatus(204)
    }
}