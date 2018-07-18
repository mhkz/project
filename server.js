const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = '您好，我是大白------'
});

app.listen(3000)