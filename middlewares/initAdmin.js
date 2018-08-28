/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/8/28
 * Time: 上午8:37
 *
 */

const Auth = require('../models/auth.model')
// 初始化管理员账号中间件
module.exports = async (ctx, next) => {
    let result = await Auth.findAllUserList();
    if(result.length === 0){
        await Auth.create();
        console.log('初始化admin账号密码完成!')
    }
    await next()
};