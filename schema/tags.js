/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tags', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tag_lock: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tag_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tag_img: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'tags'
  });
};
