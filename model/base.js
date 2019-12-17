const db = require('../tool/knex')

module.exports = (tableName)=>{
    let tn = tableName
    let model = {
       table : (tableName = tn)=>{
           if(!tableName){
               return {}
           }
           return db.table(tableName)
       },
       find : async ()=>{
           let info = await model.table().where('id',57).select()
           return info
       }  
    }

    return model  
}

