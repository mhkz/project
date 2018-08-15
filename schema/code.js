/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('code', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code_main: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    code_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    code_ip: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    code_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    code_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'code'
  });
};
