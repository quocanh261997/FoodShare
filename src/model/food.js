const Hashids = require('hashids');
const RedisUtils = require('../utils/redis');
const hashids = new Hashids('QD post');
const Redis = RedisUtils.redis;

function generatePostId() {
    return hashids.encode(Date.now());
}

exports.getFood = async function getFood(criteria) {
    const allfoodId = await Redis.smembers(criteria);
    let food = [];
    for(let i=0;i<allfoodId.length;i++)
        food.push(await Redis.hgetall(allfoodId[i]));

    return food;
}

exports.addFood = async function addFood(name, chef, rating, price, likes, criteria, img) {
    const id = generatePostId();
    const pipeline = Redis.multi();

    pipeline.hmset(id, {
        name, chef, rating, price, likes, criteria, img
    });

    pipeline.sadd(criteria, id);

    return pipeline.exec();
}