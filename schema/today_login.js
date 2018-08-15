/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('today_login', {
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
    login_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'today_login'
  });
};
