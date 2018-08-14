/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/8/12
 * Time: 下午4:08
 *
 */

const Auth = require("../models/user");
const config = require("../config");

const {
    handleRequest,
    handleError,
    handleSuccess,
    handleThrottle
} = require("../utils/handle");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const authCtrl = { login: {}, user: {} };

// md5 编码
const md5Decode = pwd => {
    return crypto
        .createHash("md5")
        .update(pwd)
        .digest("hex");
};

authCtrl.login.POST = async ctx => {

    const { username, password } = ctx.request.body;

    const user = await Auth.findUserByName(username)
    if (user) {
        if (user.password === md5Decode(password)) {
            const token = jwt.sign({
                name: user.name,
                password: user.password,
                exp: Math.floor(Date.now() / 1000) + 60 * 60
            }, config.AUTH.jwtTokenSecret);
            handleSuccess({ ctx, result: { token }, message: "登陆成功" });
        } else handleError({ ctx, message: "密码错误!" });
    } else handleError({ ctx, message: "来者何人!" });
};
authCtrl.login.GET = async ctx => {
    ctx.body = '222222'
}
exports.login = ctx => handleRequest({ ctx, controller: authCtrl.login });
exports.user = ctx => handleRequest({ ctx, controller: authCtrl.user });