/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('like', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    like_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'like'
  });
};
