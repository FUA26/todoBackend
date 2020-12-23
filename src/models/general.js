const db = require('../../db-connection')

module.exports = {
    getWebsite: (id,callBack)=>{
        db.query(
            `select * from website where id = ?`,[id],
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    }
}