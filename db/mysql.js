/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/7/25
 * Time: 上午7:36
 *
 */

const Sequelize = require('sequelize');
const sequelize = new Sequelize('iquanku', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});

module.exports = {
    sequelize
}