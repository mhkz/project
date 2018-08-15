/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notice', {
    ID: {
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
    post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    notice_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    notice_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    notice_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'notice'
  });
};
