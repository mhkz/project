/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recharge', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'recharge'
  });
};
