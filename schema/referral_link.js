/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('referral_link', {
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
    ip: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    referral_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'referral_link'
  });
};
