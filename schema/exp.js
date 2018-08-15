/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jin_exp', {
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
    exp_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exp_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    exp_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'jin_exp'
  });
};
