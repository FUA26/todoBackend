const jwt = require("jsonwebtoken");
const { dateOnly } = require("../fuctions/dateConverter");
const { logger } = require('../fuctions/log');
const { ADD_TODO, GET_TODO, DELETE_TODO, UPDATE_TODO, CHAGE_STATUS } = require("../models/todo");


module.exports ={
    getTodo:(req,res)=>{
        const data = req.body;
        // console.log(data)
        GET_TODO(data,(err,cb)=>{
            if (err) {
                console.log(err)
                throw new Error(err)
            }

            let backlog =[]
            let todo =[]
            let onprogress=[]
            let done=[]
            cb.map(data =>{
                switch (data.status) {
                    case 1:
                        backlog.push(data)
                        break;
                    case 2:
                        todo.push(data)
                        break;
                    case 3:
                        onprogress.push(data)
                        break;
                    case 4:
                        done.push(data)
                        break;
                    default:
                        break;
                }
            })
            let datas=[
                {
                    title: "Backlog",
                    id:0,
                    todos:backlog
                },
                {
                    title: "Todo",
                    id:1,
                    todos:todo
                },
                {
                    title: "On Progress",
                    id:2,
                    todos:onprogress
                },
                {
                    title: "Done",
                    id:3,
                    todos:done
                }
            ]

            let data = {
                code: '00',
                message: 'GET Todo Success',
                data: datas
            }
            // logger(req,data)
            return res.status(200).json(data)
        });
    },
    addTodo:(req,res)=>{
        const data = req.body;
        ADD_TODO(data,(err,cb)=>{
            if (err) {
                console.log(err)
                throw new Error(err)
            }
            let data = {
                code: '00',
                message: 'Add TODO Success',
                data:{
                }
            }
            // logger(req,data)
            return res.status(200).json(data)
        });
    },
    deleteTodo:(req,res)=>{
       const data = req.body;
       console.log("Data",data)
        DELETE_TODO(data,(err,cb)=>{
            if (err) {
                console.log(err)
                throw new Error(err)
            }
            let data = {
                code: '00',
                message: 'Delete Todo Success',
                data:{
                }
            }
            logger(req,data)
            return res.status(200).json(data)
        });
    },
    updateTodo:(req,res)=>{
        const data = req.body;
        console.log(data.doDate)
        data.doDate = dateOnly(data.doDate)
        console.log(data)
        UPDATE_TODO(data,(err,cb)=>{
             if (err) {
                 console.log(err)
                 throw new Error(err)
             }
             let data = {
                 code: '00',
                 message: 'Update Todo Success',
                 data:{
                 }
             }
             
             logger(req,data)
             return res.status(200).json(data)
         });
     },
     statusTodo:(req,res)=>{
         const data = req.body;
         console.log(data)
         CHAGE_STATUS(data,(err,cb)=>{
              if (err) {
                  console.log(err)
                  throw new Error(err)
              }
              let data = {
                  code: '00',
                  message: 'Update Project Success',
                  data:{
                  }
              }
              return res.status(200).json(data)
          });
      },
}