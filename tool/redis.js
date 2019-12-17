const redis = require('redis')
const config = require('../config')
const bluebird = require('bluebird')

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

let client = redis.createClient(config.redis)

client.on("error", function (err) {
    console.log("Error " + err);
});

module.exports = client