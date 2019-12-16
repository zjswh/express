const mysql = require('mysql')
const config = require('../config')

let db = mysql.createConnection(config.mysql)

db.connect()

module.exports = db
