const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class Entire extends Model {}

Entire.init({
  entire_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  budget: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  spending: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Entire',
  tableName: 'entire'
});

module.exports = Entire;