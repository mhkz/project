/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/7/26
 * Time: 上午8:37
 *
 */

const config =  require('../config/index');
const controller = require('../controller/index');
const Router = require('koa-router');

const router = new Router({
    prefix: config.APP.ROOT_PATH
})


router
    .get('/', (ctx, next) => {
        ctx.response.body = 'hello world'
    })
    .get('/user/list', controller.user.getUserList)



module.exports = router;