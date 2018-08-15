/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('follow', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    follow_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    follow_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    follow_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'follow'
  });
};
