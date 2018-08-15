/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credit', {
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
    credit_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    credit_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    credit_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'credit'
  });
};
