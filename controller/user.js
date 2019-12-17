const express = require('express')
const userModel = require('../model/user')
const format = require('../tool/format')
const redis = require('')

let app = express()
//查
app.get('/info',async (req,res)=>{
    let id = req.query.id
    let info = await userModel.getUser(id,['id','name','age','phone','email'])
    return res.json(format.data(info));
})

app.get('/list',async (req,res)=>{
    let info = await userModel.getList()
    return res.json(format.data(info));
})

//增
app.post('/add',async (req,res)=>{
    let body = req.body
    let user = {
        name : body.name,
        age : body.age,
        phone : body.phone,
        email : body.email
    }
    let id = await userModel.addUser(user)
    return res.json(format.data(id));
})

//改
app.post('/update',async (req,res)=>{
    let body = req.body
    let id =  body.id
    let user = {
        name : body.name,
        age : body.age,
        phone : body.phone,
        email : body.email
    }
    userModel.updateUser(user,id)
    return res.json(format.data('修改成功'));
})

//删
app.post('/delete',async (req,res)=>{
    let id =  req.body.id
    userModel.deleteUser(id)
    return res.json(format.data('删除成功'));
})
module.exports = app