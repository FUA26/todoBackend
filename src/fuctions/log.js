var moment = require('moment')
module.exports = {
    logger: (req,res)=>{
        let date = moment().format('MMMM Do YYYY, h:mm:ss a');
        console.log('')
        console.log('===================================================');
        console.log('Date           :',date)
        console.log('Endpoint       :',req.url)
        console.log('Request        :',req.body)
        console.log('Response       :',res)
        console.log('===================================================');
        console.log('')
    }
}