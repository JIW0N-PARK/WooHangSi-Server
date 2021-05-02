const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class User_Category extends Model {}

User_Category.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  budget: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  spending: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  category_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  month: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'User_Category',
  tableName: 'user_category'
});

module.exports = User_Category;