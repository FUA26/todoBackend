const jwt = require("jsonwebtoken");
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
            let data = {
                code: '00',
                message: 'GET Todo Success',
                data: cb
            }
            // logger(req,data)
            return res.status(200).json(data)
        });
    },
    addTodo:(req,res)=>{
        const data = req.body;
        // console.log(data)
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
    //    console.log(data)
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
            // logger(req,data)
            return res.status(200).json(data)
        });
    },
    updateTodo:(req,res)=>{
        const data = req.body;
        // console.log(data)
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
             // logger(req,data)
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
              // logger(req,data)
              return res.status(200).json(data)
          });
      },
}