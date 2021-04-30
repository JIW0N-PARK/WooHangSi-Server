const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class Point extends Model {}

Point.init({
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
  modelName: 'Point',
  tableName: 'point'
});

module.exports = Point;