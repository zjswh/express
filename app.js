const express = require('express')

let app = express()
const userController = require('./controller/user')

app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use('public', express.static('public'))

app.use('/user',userController)

app.get('/api',(req,res)=>{
  let path = req.path
  res.send(path)
})



app.listen(8000)
console.log('server is running at http://127.0.0.1:8000')