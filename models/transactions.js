const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class Transactions extends Model {}

Transactions.init({
  trn_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  trn_dt: {
    type: DataTypes.STRING,
    allowNull: false
  },
  trn_tm: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cucd: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rcv_am: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  pay_am: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  dps_bal: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  trn_txt: {
    type: DataTypes.STRING,
    allowNull: false
  },
  acno: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'Transactions',
  tableName: 'transaction_list'
});

module.exports = Transactions;