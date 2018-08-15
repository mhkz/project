/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bbs_visit_pass', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bbs_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'bbs_visit_pass'
  });
};
