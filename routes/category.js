var express = require('express');
var router = express.Router();
var User_Category = require('../models/user_category');
const catchErrors = require('../lib/async-error');

router.post('/', catchErrors(async (req, res, next)=>{
  // 설정한 카테고리 예산 조회

  // {
  //   user_id: "",
  //   category_id: "",
  //   month: ""
  // }
  var user_category = await User_Category.findAll({
    where: {
      user_id: req.body.user_id,
      category_id: req.body.category_id,
      month: req.body.month
    }
  });

  return res.json(user_category);
}));

router.post('/budget/add', catchErrors(async (req, res, next) => {
  // 카테고리 예산 추가

  // {
  //   budget: "",
  //   user_id: "",
  //   category_id: "",
  //   month: ""
  // }
  var user_category = await User_Category.create({
    budget: req.body.budget,
    user_id: req.body.user_id,
    category_id: req.body.category_id,
    month: req.body.month
  });

  return res.json(user_category);
}));

router.put('/budget/update', catchErrors(async (req, res, next) => {
  // 카테고리 예산 수정

  // {
  //   budget: "",
  //   id: ""
  // }
  var user_category = await User_Category.update({
    budget: req.body.budget
  }, {
    where: {
      id: req.body.id
    }
  });
  return res.json(user_category);
}));

router.delete('/budget/delete', catchErrors(async (req, res, next) => {
  // 카테고리 예산 삭제

  // {
  //   id: ""
  // }
  var user_category = await User_Category.destroy({
    where: {
      id: req.body.id
    }
  });
  return res.json(user_category);
}));


router.post('/spending/add', catchErrors(async (req, res, next) => {
  // 카테고리 지출 추가

  // {
  //   user_id: "",
  //   category_id: "",
  //   month: ""
  // }
  var user_spending = await User_Category.update({
    spending: req.body.spending
  }, {
    where: {
      user_id: req.body.user_id,
      category_id: req.body.category_id,
      month: req.body.month
    }
  });

  return res.json(user_spending);
}));

module.exports = router;