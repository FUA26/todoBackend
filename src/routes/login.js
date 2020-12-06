const express =  require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const { checkToken } = require('../middleware/authToken');

const { login,refreshToken, logout } = require('../controllers/login');



router.post('/token', refreshToken)
router.delete('/logout', logout)
router.post('/login',login)
router.get('/test',checkToken,(req,res)=>{
    return res.json({
        message: "Bisa Dong"
    })
})

module.exports = router;