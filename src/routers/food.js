const Router = require('koa-router');
const foodModel = require('../model/food');

const router = new Router({
    prefix: '/food'
});

router.get('/get', async function(ctx) {
    const foods = await foodModel.getFood(ctx.request.query.criteria);

    ctx.setSuccess(foods);
});

router.post('/add', async function(ctx) {
    const body = ctx.request.body;

    await foodModel.addFood(body.name, body.chef, body.rating, body.likes, body.price, body.criteria, body.img);

    ctx.setSuccess();
});

module.exports = router;
