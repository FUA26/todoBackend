bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const { logger } = require('../fuctions/log');
const { getWebsite } = require('../models/general');
const { login } = require("../models/login")
let refreshTokens = []


module.exports ={
    getGeneral: (req,res,next)=>{
        const data = req.body.id;
        getWebsite(data,(err,cb)=>{
            if (err) {
                return res.status(500).json({
                    code: '01',
                    message: 'Internal Server Erorr'
                })
            }
            if (cb) {
                let data = {
                    code: '00',
                    message: 'Success Get Data',
                    data: cb
                }
                logger(req,data)
                return res.status(200).json(data)
            }
        })
    }
}