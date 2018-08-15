/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fangke', {
    ke_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    my_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fangke_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'fangke'
  });
};
