/**
 * Routes
 */

const Router = require('koa-router');
const explore = require('./explore');
const feed = require('./feed');
const order = require('./order');
const Redis = require('../utils/redis').redis;

const Routes = new Router();

Routes.get('/flush', async (ctx) => {
    const result = await Redis.flushdb();
    ctx.setSuccess(result);
});

Routes.use(feed.routes(), feed.allowedMethods());
Routes.use(explore.routes(), explore.allowedMethods());
Routes.use(order.routes(),order.allowedMethods());


module.exports = Routes;
