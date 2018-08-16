/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/7/26
 * Time: 上午8:34
 *
 */

const argv = require('yargs').argv

exports.AUTH = {
    jwtTokenSecret: argv.auth_key || 'mhkz',
    defaultUsername: argv.auth_default_username || 'mhkz',
    defaultPassword: argv.auth_default_password || '123456'
}

exports.APP = {
    ROOT_PATH: '/api',
    LIMIT:  16,
    PORT: 3000
}