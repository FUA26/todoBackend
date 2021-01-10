const db = require('../../db-connection')

module.exports = {
    login: (email,callBack)=>{
        db.query(
            `select * from todo where email = ?`,[email],
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
    register: (data,callBack)=>{
        db.query(
            `INSERT INTO  user ( id,  nama,  email,  username,  hp,  password,  status,  created_at,  updated_at) VALUES ('',?,?,?,?,?,?,null,null)`,[data.nama,data.email,data.username,data.hp,data.hashPassword,0],
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
    checkUser: (data,callBack)=>{
        db.query(
            `SELECT * FROM user WHERE username = ? OR email = ?`,[data.username,data.email],
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
}