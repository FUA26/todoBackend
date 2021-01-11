const db = require('../../db-connection')

module.exports = {
    GET_TODO: (data,callBack)=>{
        db.query(
            `SELECT * FROM todo WHERE 1`,null,
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
    ADD_TODO: (data,callBack)=>{
        db.query(
            `INSERT INTO todo (id, id_project, title, des, do_date, start, end, status, priority, created_at, updated_at) VALUES ('',?,?,?,?,?,?,?,?,null,null)`,[data.projectID,data.title,data.des,data.doDate,data.start,data.end,data.status,data.priority],
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
    DELETE_TODO:(data,callBack)=>{
        db.query(
            `DELETE FROM todo WHERE id = ?`,[data.id],
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
    UPDATE_TODO:(data,callBack)=>{
        db.query(
            `UPDATE todo SET title = ?, des= ?, do_date= ?, start= ?, end= ?, status= ?, priority= ? where id = ?`,[data.title,data.des,data.doDate,data.start,data.end,data.status,data.priority],
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
    CHAGE_STATUS:(data,callBack)=>{
        db.query(
            `UPDATE todo SET status=? where id = ?`,[data.status,data.id],
            
            (err, res, field)=>{
            if (err) {
                callBack(err);
            }
            return callBack(null, res)
        });
    },
}