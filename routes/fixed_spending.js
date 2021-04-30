var express = require('express');
var router = express.Router();
var Fixed_spending = require('../models/fixed_spending');
const catchErrors = require('../lib/async-error');

router.post('/', catchErrors(async (req, res, next)=>{
  // 설정한 고정 지출 조회
  var fixed_spending_list = await Fixed_spending.findAll({
    where: {user_id: req.body.user_id}
  });

  return fixed_spending_list;
}));

router.post('/add', catchErrors(async (req, res, next) => {
  // 고정 지출 추가
  var fixed_spending = await Fixed_spending.create({
    fixed_content: req.body.fixed_content,
    fixed_amount: req.body.fixed_amount,
    user_id: req.body.user_id
  });
  return fixed_spending;
}));

router.put('/update', catchErrors(async (req, res, next) => {
  // 고정 지출 수정
  var fixed_spending = await Fixed_spending.update({
    fixed_content: req.body.fixed_content,
    fixed_amount: req.body.fixed_amount
  }, {
    where: {
      fixed_spending_id: req.body.fixed_spending_id
    }
  });
  return fixed_spending;
}));

router.delete('/delete', catchErrors(async (req, res, next) => {
  // 고정 지출 삭제
  var fixed_spending = await Fixed_spending.destroy({
    where: {
      fixed_spending_id: req.body.fixed_spending_id
    }
  });
  return fixed_spending;
}));

module.exports = router;