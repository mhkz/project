/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/7/31
 * Time: 上午11:32
 *
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        keywords: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING()
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: false
    })
}