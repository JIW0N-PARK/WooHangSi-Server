const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class AccBasic extends Model {}

AccBasic.init({
  acno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cucd: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ct_bal: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'AccBasic',
  tableName: 'account_basic'
});

module.exports = AccBasic;