const jwt = require("jsonwebtoken");
const { logger } = require('../fuctions/log');
const { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, CHAGE_STATUS, GET_PROJECT } = require("../models/project");


module.exports ={
    getProject:(req,res)=>{
        const data = req.body;
        // console.log(data)
        GET_PROJECT(data,(err,cb)=>{
            if (err) {
                console.log(err)
                throw new Error(err)
            }
            let data = {
                code: '00',
                message: 'GET Project Success',
                data: cb
            }
            // logger(req,data)
            return res.status(200).json(data)
        });
    },
    addProject:(req,res)=>{
        const data = req.body;
        // console.log(data)
        ADD_PROJECT(data,(err,cb)=>{
            if (err) {
                console.log(err)
                throw new Error(err)
            }
            let data = {
                code: '00',
                message: 'Add Project Success',
                data:{
                }
            }
            // logger(req,data)
            return res.status(200).json(data)
        });
    },
    deleteProject:(req,res)=>{
       const data = req.body;
       console.log(data)
        DELETE_PROJECT(data,(err,cb)=>{
            if (err) {
                console.log(err)
                throw new Error(err)
            }
            let data = {
                code: '00',
                message: 'Delete Project Success',
                data:{
                }
            }
            // logger(req,data)
            return res.status(200).json(data)
        });
    },
    updateProject:(req,res)=>{
        const data = req.body;
        console.log(data)
        UPDATE_PROJECT(data,(err,cb)=>{
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
     statusProject:(req,res)=>{
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