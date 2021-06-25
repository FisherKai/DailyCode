const router = require('koa-router')()
const json = require('koa-json');
const dbconfig = require('../mysqlConfig');

router.get('/', async (ctx, next) => {
  ctx.body = 'hello world!'
})

router.get('/user', async (ctx, next) => {
  let result = await dbconfig.allServices.findUserAll();
  console.log(result);
  ctx.body = {
    data: result
  };
})

module.exports = router
