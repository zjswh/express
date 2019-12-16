const knex = require('knex')
const config = require('../config')

let db = knex({
    client : 'mysql',
    connection : {
        host: config.mysql.host,
        user: config.mysql.user,
        password: config.mysql.password,
        database: config.mysql.database,
        port :config.mysql.port
    },
    pool: { min: config.mysql.min, max: config.mysql.max }
})
let info = db.column('id', 'name').select().from('lps_soldier').first()
console.log(info)
// module.exports = db