const db = require('../tool/knex')

// let info = db('lps_soldier')
// .where('id',57)
// .first()
let info = db.select().from('lps_soldier').timeout(1000)
console.log(info)
