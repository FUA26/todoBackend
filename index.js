require('dotenv').config()
const express =  require('express')
const bodyParser = require('body-parser')
const database = require('./db-connection')
const app = express();
const login = require('./src/routes/login')
const project = require('./src/routes/project');
const todo = require('./src/routes/todo');
const { logger } = require('./src/fuctions/log');


app.use(bodyParser.json());



app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Alloe-Headers','Content-Type, Authorization')
    next()

})

app.use('/v1',login)
app.use('/v1/project',project)
app.use('/v1/todo',todo)
 

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const messages = error.message;
    const data = error.data;
    res.status(status).json({code:status, message: messages ,data:data})
})

database.connect((err)=>{
    if (!err) {
        console.log("Handhake with DB Success!")
        app.listen(4000)
    } else {
        console.log(err)
    }
})
