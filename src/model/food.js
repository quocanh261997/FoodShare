const Hashids = require('hashids');
const RedisUtils = require('../utils/redis');
const hashids = new Hashids('QD post');
const Redis = RedisUtils.redis;

function generatePostId() {
    return hashids.encode(Date.now());
}

exports.getFood()