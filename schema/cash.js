/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jin_cash', {
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
    status: {
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
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cash_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'jin_cash'
  });
};
