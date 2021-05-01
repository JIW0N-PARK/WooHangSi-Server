var express = require('express');
var router = express.Router();
var IndivAccs = require('../models/indiv_accounts');
var Transaction = require('../models/transactions');
const catchErrors = require('../lib/async-error');

router.post('/account', catchErrors(async (req, res, next) => {
  // 계좌 데이터 추가

  // {
  //   "acno": 계좌번호,
  //   "prd_nm": 상품명,
  //   "cucd": 통화코드,
  //   "pbok_bal": 현재 잔액,
  //   "act_stcd": 계좌상태코드,
  //   "user_id": user_id
  // }
  var indivAccs = await IndivAccs.create({
    acno: req.body.acno,
    prd_nm: req.body.prd_nm,
    cucd: req.body.cucd,
    pbok_bal: req.body.pbok_bal,
    act_stcd: req.body.act_stcd,
    user_id: req.body.user_id
  });

  return res.json(indivAccs);
}));

router.post('/transaction', catchErrors(async (req, res, next) => {
  // 거래 데이터 추가

  // {
  //   "trn_dt": "거래일자",
  //   "trn_tm": "거래시각",
  //   "cucd": "통화코드",
  //   "rcv_am": "입금금액",
  //   "pay_am": "출금금액",
  //   "dps_bal": "거래후잔액",
  //   "trn_txt": "거래내용",
  //   "acno": "계좌번호"
  // }
  var transaction = await Transaction.create({
    trn_dt: req.body.trn_dt,
    trn_tm: req.body.trn_tm,
    cucd: req.body.cucd,
    rcv_am: req.body.rcv_am,
    pay_am: req.body.pay_am,
    dps_bal: req.body.dps_bal,
    trn_txt: req.body.trn_txt,
    acno: req.body.acno
  });

  return res.json(transaction);
}));


module.exports = router;