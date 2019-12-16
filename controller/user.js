const express = require('express')
let app = express()

app.get('/list',(req,res)=>{
    res.send('this is user/list')
})

app.post('/add',(req,res)=>{
    let body = req.body
    res.send(JSON.stringify(body))
})

module.exports = app