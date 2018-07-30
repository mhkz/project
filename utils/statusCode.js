/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/7/26
 * Time: 上午8:28
 *
 */

const statusCode = {
    ERROR_401: (msg) => {
        return {
            code: 401,
            msg
        }
    },

    ERROR_403: (msg) => {
        return {
            code: 403,
            msg
        }
    },

    ERROR_404: (msg) => {
        return {
            code: 404,
            msg
        }
    },

    ERROR_412: (msg) => {
        return {
            code: 412,
            msg
        }
    },

    SUCCESS_200: (msg, data) => {
        return {
            code: 200,
            msg,
            data,
        }
    }
}

module.exports = statusCode