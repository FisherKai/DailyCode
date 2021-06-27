const router = require('koa-router')()
const json = require('koa-json');
const dbconfig = require('../mysqlConfig');
const routerPrefix = require('./common.js').routerPrefix;

router.prefix(`${routerPrefix}`)

router.get('/', async (ctx, next) => {
  ctx.body = 'hello world!'
})

router.get('/getAllMenu', async (ctx, next) => {
  let result = await dbconfig.allServices.findMenuAll();
  console.log(result);
  ctx.body = {
    data: result
  };
})

module.exports = router
