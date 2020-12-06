const db = require('../../db-connection')

module.exports = {
    login: (email,callBack)=>{
        db.query(
            `select * from client where email = ?`,[email],
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    }
}