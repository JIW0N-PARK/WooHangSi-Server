var express = require('express');
var router = express.Router();
var IndivAccs = require('../models/indiv_accounts');
var Transactions = require('../models/transactions');
const catchErrors = require('../lib/async-error');

router.post('/getAllAccount', catchErrors(async (req, res, next)=>{
  // 사용자 모든 계좌 조회

  // {
  //   user_id: ""
  // }
  var accounts = await IndivAccs.findAll({
    where: {
      user_id: req.body.user_id
    }
  });

  return res.json(accounts);
}));

router.post('/getTransactions', catchErrors(async (req, res, next)=>{
  // 계좌 내역 조회

  // {
  //   acno: ""
  // }
  var transaction = await Transactions.findAll({
    where: {
      acno: req.body.acno
    }
  });

  return res.json(transaction);
}));

module.exports = router;