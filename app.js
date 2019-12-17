const express = require('express')
let createError = require('http-errors');
let format = require('./tool/format');


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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404)
  res.json(format.data('',404,'接口不存在'))
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(8080)
console.log('server is running at http://127.0.0.1:8080')