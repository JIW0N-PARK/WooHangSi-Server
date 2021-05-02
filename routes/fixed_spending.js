var express = require('express');
var router = express.Router();
var Fixed_spending = require('../models/fixed_spending');
const catchErrors = require('../lib/async-error');

router.post('/', catchErrors(async (req, res, next)=>{
  // 설정한 고정 지출 조회

  // {
  //   user_id: "", --> INTEGER
  //   month: "" --> INTEGER
  // }
  var fixed = await Fixed_spending.findOne({
    where: {
      user_id: req.body.user_id,
      month: req.body.month
    }
  });
  if(fixed){
    var fixed_spending_list = await Fixed_spending.findAll({
      where: {
        user_id: req.body.user_id,
        month: req.body.month
      }
    });
    return fixed_spending_list;
  }
  return res.send('Not Found');
}));

router.post('/add', catchErrors(async (req, res, next) => {
  // 고정 지출 추가

  // {
  //   fixed_content: "", --> 교통비, 월세, 통신비 STRING
  //   fixed_amount: "", --> INTEGER
  //   user_id: "", --> INTEGER
  //   month: "" --> INTEGER
  // }
  var fixed_spending = await Fixed_spending.create({
    fixed_content: req.body.fixed_content,
    fixed_amount: req.body.fixed_amount,
    user_id: req.body.user_id,
    month: req.body.month
  });
  return res.json(fixed_spending);
}));

router.put('/update', catchErrors(async (req, res, next) => {
  // 고정 지출 수정

  // {
  //   fixed_content: "",
  //   fixed_amount: "",
  //   fixed_spending_id: ""
  // }
  var fixed_spending = await Fixed_spending.update({
    fixed_content: req.body.fixed_content,
    fixed_amount: req.body.fixed_amount
  }, {
    where: {
      fixed_spending_id: req.body.fixed_spending_id
    }
  });
  return res.json(fixed_spending);
}));

router.delete('/delete', catchErrors(async (req, res, next) => {
  // 고정 지출 삭제

  // {
  //   fixed_spending_id: ""
  // }
  var fixed_spending = await Fixed_spending.destroy({
    where: {
      fixed_spending_id: req.body.fixed_spending_id
    }
  });
  // 1 = success
  return res.json(fixed_spending);
}));

module.exports = router;