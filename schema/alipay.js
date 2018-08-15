/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alipay', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    trade_no: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    alipay_no: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    total: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pay_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    buyer_email: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'alipay'
  });
};
