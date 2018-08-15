/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vote', {
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
    post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'vote'
  });
};
