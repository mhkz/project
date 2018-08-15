/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/8/15
 * Time: 上午8:27
 *
 */
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('categories', {
        term_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false,
            defaultValue: ''
        },
        slug: {
            type: DataTypes.STRING(200),
            allowNull: false,
            defaultValue: ''
        },
        term_group: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: '0'
        }
    }, {
        tableName: 'categories'
    });
};
