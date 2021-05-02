const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class Total_Point extends Model {}

Total_Point.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  total_amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Total_Point',
  tableName: 'total_point'
});

module.exports = Total_Point;