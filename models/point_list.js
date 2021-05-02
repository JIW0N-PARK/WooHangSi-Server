const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class Point_list extends Model {}

Point_list.init({
  point_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  point_amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  point_content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Point_list',
  tableName: 'point_list'
});

module.exports = Point_list;