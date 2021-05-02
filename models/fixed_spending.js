const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class Fixed_spending extends Model {}

Fixed_spending.init({
  fixed_spending_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fixed_content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fixed_amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  month: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'Fixed_spending',
  tableName: 'fixed_spending'
});

module.exports = Fixed_spending;