const Koa = require('koa');
const http = require('http');
const app = new Koa();
const logger = require('koa-logger');
const router = require('./route');
const config = require('./config');
const helmet = require('koa-helmet')
const cors = require('koa-cors');
const koaBody = require('koa-body'); // post 请求

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
app.use(helmet());
app.use(koaBody({
    jsonLimit: '10mb',
    formLimit: '10mb',
    textLimit: '10mb'
}))
app.use(router.routes());

// start server
http.createServer(app.callback()).listen(config.APP.PORT, () => {
    console.log(`node-Koa Run！port at ${config.APP.PORT}`)
})
module.exports = app;