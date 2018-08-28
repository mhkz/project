/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/8/12
 * Time: 下午4:08
 *
 */
const Auth = require("../models/auth.model")
const config = require("../config")

const { handleError, handleSuccess} = require("../utils/handle")

const jwt = require("jsonwebtoken")
const crypto = require("crypto")

// md5 编码
const md5Decode = pwd => crypto.createHash("md5").update(pwd).digest("hex")


class AuthController {

    // 登录
    static async login (ctx) {
        const { username, password } = ctx.request.body;
        const user = await Auth.findUserByName(username)

        if (!user) return handleError({ ctx, message: "账户不存在，请重新注册!" });
        if (user.password != md5Decode(password)) return handleError({ ctx, message: "密码错误!" });
        const token = jwt.sign({
            name: user.name,
            password: user.password,
            exp: Math.floor(Date.now() / 1000) + 60 * 60
        }, config.AUTH.jwtTokenSecret);
        handleSuccess({ ctx, result: { token }, message: "登陆成功" });
    }

    // 获取用户信息
    static async getAuth (ctx) {
        const auth = await Auth.findAllUserList();
        if (!auth) return handleError({ ctx, message: "获取用户资料失败" });
        handleSuccess({ ctx, result: auth, message: '获取用户资料成功'})
    }

    // 修改用户信息
    static async putAuth (ctx) {
        const { _id, name, username, slogan, gravatar, oldPassword, newPassword } = ctx.request.body
        const _auth = await Auth
            .findOne({}, '_id name slogan gravatar password')
            .catch(err => ctx.throw(500, '服务器内部错误'))
        if (_auth) {
            if (_auth.password !== md5Decode(oldPassword)) handleError({ ctx, message: "原密码错误" })
            else {
                const password = newPassword === '' ? oldPassword : newPassword
                let auth = await Auth
                    .findByIdAndUpdate(_id, { _id, name, username, slogan, gravatar, password: md5Decode(password) }, { new: true })
                    .catch(err => ctx.throw(500, '服务器内部错误'))
                if (auth) handleSuccess({ ctx, result: auth, message: '修改用户资料成功'})
                else handleError({ ctx, message: "修改用户资料失败" })
            }
        } else handleError({ ctx, message: "修改用户资料失败" })
    }
}

module.exports = AuthController;