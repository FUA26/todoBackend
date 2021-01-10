const express =  require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const { checkToken } = require('../middleware/authToken');

const { login,refreshToken, logout, register } = require('../controllers/login');



router.post('/token', refreshToken)
router.delete('/logout', logout)
router.post('/login',login)
router.post('/register', register)



module.exports = router;