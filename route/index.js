/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/7/26
 * Time: 上午8:37
 *
 */

// 路由管理

const config = require('../config');
const controller = require('../controller');
const authIsVerified = require('../utils/auth');
const Router = require('koa-router');
const { handleError } = require('../utils/handle');

const router = new Router({
    prefix: config.APP.ROOT_PATH
})

// 拦截器
router.all('*', async (ctx, next) => {

    // Set Header
    const allowedOrigins = ['127.0.0.1', 'localhost'];
    const origin = ctx.request.headers.origin || '';
    if (allowedOrigins.includes(origin) || origin.includes('localhost')) {
        ctx.response.set('Access-Control-Allow-Origin', origin);
    };
    ctx.response.set({
        // 'Access-Control-Allow-Headers': 'Authorization, Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With',
        'Access-Control-Allow-Methods': 'PUT,PATCH,POST,GET,DELETE,OPTIONS',
        'Access-Control-Max-Age': '1728000',
        'Content-Type': 'application/json;charset=utf-8',
        'X-Powered-By': 'mhkz 1.0.0'
    });

    // OPTIONS
    // if (ctx.request.method == 'OPTIONS') {
    //     ctx.response.sendStatus(200);
    //     return false;
    // };
    //
    // // 如果是生产环境，需要验证用户来源渠道，防止非正常请求
    // if (Object.is(process.env.NODE_ENV, 'production')) {
    //     const { origin, referer } = ctx.request.headers;
    //     const originVerified = (!origin	|| origin.includes('localhost')) &&
    //         (!referer || referer.includes('localhost'))
    //     if (!originVerified) {
    //         ctx.status = 403
    //         ctx.response.body = { code: 0, message: '来者何人！' }
    //         return false;
    //     };
    // };
    //
    // // 排除auth的post请求 && 评论的post请求 && like请求
    // const isLike = Object.is(ctx.request.url, '/like') && Object.is(ctx.request.method, 'POST');
    // const isPostAuth = Object.is(ctx.request.url, '/auth') && Object.is(ctx.request.method, 'POST');
    // const isPostComment = Object.is(ctx.request.url, '/comment') && Object.is(ctx.request.method, 'POST');
    // if (isLike || isPostAuth || isPostComment) {
    //     next();
    //     return false;
    // };
    //
    // // 拦截所有非管路员的非get请求
    // if (!authIsVerified(ctx.request) && !Object.is(ctx.request.method, 'GET')) {
    //     ctx.status = 401
    //     ctx.response.body = { code: 0, message: '来者何人！' }
    //     return false;
    // };

    await next();
    // this.body = 'hello world'
});

// Api
router.get('/', (ctx, next) => {
    // ctx.response.body = config.INFO;
    console.log("111")
    ctx.response.body = JSON.stringify('这是首页');
});

router.post('/login', controller.auth.login);

// 分类
router.all('/category', controller.category.list)

// // Auth
// router.get('/auth', controller.auth);

// // 七牛Token
// app.all('/qiniu', controller.qiniu);

// 全局option
// router.all('/option', controller.option);

// // sitemap
// app.get('/sitemap.xml', controller.sitemap);

// like
// router.post('/like', controller.like);


// // music
// app.get('/music/pic/:pic_id', controller.music.pic);
// app.get('/music/lrc/:song_id', controller.music.lrc);
// app.get('/music/url/:song_id', controller.music.url);
// app.get('/music/song/:song_id', controller.music.song);
// app.get('/music/list/:play_list_id', controller.music.list);

// Tag
// router.all('/tag', controller.tag.list);
// router.all('/tag/:tag_id', controller.tag.item);

// // Category
// app.all('/category', controller.category.list);
// app.all('/category/:category_id', controller.category.item);

// // 评论
// app.all('/comment', controller.comment.list);
// app.all('/comment/:comment_id', controller.comment.item);

// // Article
// router.all('/article', controller.article.list);
// router.all('/article/:article_id', controller.article.item);

// // 404
// router.all('*', async (ctx, next) => {
// 	ctx.response.status(404).jsonp({
// 		code: 0,
// 		message: '无效的API请求'
// 	})
// });

module.exports = router;