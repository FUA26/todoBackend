const jwt = require('jsonwebtoken')

module.exports = {
    checkToken:(req, res, next)=>{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            
            if (err) {
                const err = new Error('Access denied!!');
                err.errorStatus = 401;
                err.data = {};
                throw err;
            }
            req.user = user
            next()
          })
    },

}