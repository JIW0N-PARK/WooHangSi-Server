const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class IndivAccs extends Model {}

IndivAccs.init({
  acno: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true
  },
  prd_nm: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cucd: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pbok_bal: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  act_stcd: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'IndivAccs',
  tableName: 'indiv_accounts'
});

module.exports = IndivAccs;