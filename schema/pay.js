/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pay', {
    pay_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pay_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pay_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pay_content: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'pay'
  });
};
