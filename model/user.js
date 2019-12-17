const model = require('./base')

let self = model('user_demo')

self.getUser = async (id,field)=>{
    let info = await self.table().where('id',id).select(field).first()
    return info
}

self.getList = async ()=>{
    let info = await self.table().select().orderBy('id')
    return info
}

self.addUser = async (user)=>{
    let time = new Date().getTime() 
    time = parseInt(time / 1000)
    user.createTime = time
    user.updateTime = time
    let res = await self.table().returning('id').insert(user)
    return res
}

self.updateUser = async (user,id)=>{
    let time = new Date().getTime() 
    time = parseInt(time / 1000)
    user.updateTime = time
    let res = await self.table().where('id',id).update(user)
    return res
}

self.deleteUser = async (id)=>{
    let res = await self.table().where('id',id).del()
    return res
}
module.exports = self