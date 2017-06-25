const Router = require('koa-router');

const router = new Router({
    prefix: '/order'
});

router.get('/', async function(ctx) {
    await ctx.render('order');
});

router.get('/pickup',async function(ctx){
  await ctx.render('pickup');
});

router.get('/delivery',async function(ctx){
  await ctx.render('delivery');
});

router.get('/biling',async function(ctx){
  await ctx.render('biling');
});

module.exports = router;
