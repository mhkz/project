/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('msg', {
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
    from_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    msg_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    msg_content: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'msg'
  });
};
