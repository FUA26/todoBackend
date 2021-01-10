const db = require('../../db-connection')

module.exports = {
    GET_PROJECT: (data,callBack)=>{
        db.query(
            `SELECT * FROM project WHERE 1`,null,
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
    ADD_PROJECT: (data,callBack)=>{
        db.query(
            `INSERT INTO project (id, nama, des, id_user, status, created_at, update_at) VALUES ('',?,?,?,0,null,null)`,[data.nama,data.des,data.idUser,],
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
    DELETE_PROJECT:(data,callBack)=>{
        db.query(
            `DELETE FROM project WHERE id = ?`,[data.id],
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
    UPDATE_PROJECT:(data,callBack)=>{
        db.query(
            `UPDATE project SET nama = ?, des = ?, status=? where id = ?`,[data.nama,data.des,data.status,data.id],
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
    CHAGE_STATUS:(data,callBack)=>{
        db.query(
            `UPDATE project SET status=? where id = ?`,[data.status,data.id],
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
}