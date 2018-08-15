/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alipay_vip', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    alipay_vip_no: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    vip_time_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    vip_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'alipay_vip'
  });
};
