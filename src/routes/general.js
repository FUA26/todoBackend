const express =  require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { getGeneral } = require('../controllers/general');
const { checkToken } = require('../middleware/authToken');




router.get('/get-website',checkToken, getGeneral)


module.exports = router;