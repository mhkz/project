/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/7/25
 * Time: 上午8:45
 *
 */

const userModel = require('../models/user');
const statusCode = require('../utils/statusCode')

class UserController {
    static async getUserList (ctx) {
        const userList = await userModel.findAllUserList();
        if (userList) {
            ctx.response.status = 200;
            ctx.body = statusCode.SUCCESS_200(userList)
        }

    }
}

module.exports = UserController;