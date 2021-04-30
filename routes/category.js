var express = require('express');
var router = express.Router();
var Category = require('../models/category');
const catchErrors = require('../lib/async-error');

router.post('/', catchErrors(async (req, res, next)=>{
  // 설정한 카테고리 예산 조회

  // {
  //   user_id: "",
  //   category_id: ""
  // }
  var category = await Category.findAll({
    where: {
      user_id: req.body.user_id,
      category_id: req.body.category_id
    }
  });

  return res.json(category);
}));

router.post('/budget/add', catchErrors(async (req, res, next) => {
  // 카테고리 예산 추가

  // {
  //   budget: "",
  //   user_id: "",
  //   category_id: ""
  // }
  var category = await Category.create({
    budget: req.body.budget,
    user_id: req.body.user_id,
    category_id: req.body.category_id
  });

  return res.json(category);
}));

router.put('/budget/update', catchErrors(async (req, res, next) => {
  // 카테고리 예산 수정

  // {
  //   budget: "",
  //   id: ""
  // }
  var category = await Category.update({
    budget: req.body.budget
  }, {
    where: {
      id: req.body.id
    }
  });
  return res.json(category);
}));

router.delete('/budget/delete', catchErrors(async (req, res, next) => {
  // 카테고리 예산 삭제

  // {
  //   id: ""
  // }
  var category = await Category.destroy({
    where: {
      id: req.body.id
    }
  });
  return res.json(category);
}));


router.post('/spending/add', catchErrors(async (req, res, next) => {
  // 카테고리 지출 추가

  // {
  //   spending: "",
  //   id: ""
  // }
  var category = await Category.update({
    spending: req.body.spending
  }, {
    where: {
      id: req.body.id
    }
  });

  return res.json(category);
}));

module.exports = router;