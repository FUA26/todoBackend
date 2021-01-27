var moment = require('moment')
module.exports = {
    dateOnly: (req)=>{
        let date = moment(req).format('YYYY-MM-DD');
        return date
    }
}