/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bbs_like', {
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
    bbs_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'bbs_like'
  });
};
