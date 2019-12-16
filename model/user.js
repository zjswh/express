const db = require('../tool/db')
db.query('SELECT * FROM lps_soldier',(err,results,field)=>{
    console.log(results)
})