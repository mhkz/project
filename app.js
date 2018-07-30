const Koa = require('koa');
const http = require('http');
const app = new Koa();
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser')
const router = require('./route');

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(router.routes(), router.allowedMethods());

// start server
http.createServer(app.callback()).listen(config.APP.PORT, () => {
    console.log(`node-Koa Run！port at ${config.APP.PORT}`)
})
module.exports = app;