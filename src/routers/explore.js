const Router = require('koa-router');

const router = new Router({
    prefix: '/explore'
});

router.get('/', async function(ctx) {
    await ctx.render('explore');
});


module.exports = router;
