var express = require('express');
var router = express.Router();
var Brand = require('../models/brand');
var User_Brand = require('../models/user_brand');
const catchErrors = require('../lib/async-error');

router.post('/', catchErrors(async (req, res, next)=>{
  // 브랜드 예산 조회

  // {
  //   user_id: "",
  //   brand_id: "",
  //   month: ""
  // }
  var user_brand = await User_Brand.findAll({
    where: {
      user_id: req.body.user_id,
      brand_id: req.body.brand_id,
      month: req.body.month
    }
  });

  return res.json(user_brand);
}));

router.post('/add', catchErrors(async (req, res, next)=>{
  // 브랜드 추가

  // {
  //   brand_name: "",
  //   category_id: ""
  // }
  var brand = await Brand.create({
    brand_name: req.body.brand_name,
    category_id: req.body.category_id
  });

  return res.json(brand);
}));

// router.post('/addImage', catchErrors(async (req, res, next)=>{
//   // 브랜드 이미지 추가

//   // {
//   //   brand_name: "",
//   //   category_id: ""
//   // }
//   var brand = await Brand.create({
//     brand_name: req.body.brand_name,
//     category_id: req.body.category_id
//   });

//   return res.json(brand);
// }));

router.post('/budget/add', catchErrors(async (req, res, next) => {
  // 브랜드 예산 추가

  // {
  //   user_id: "",
  //   brand_id: "",
  //   budget: "",
  //   spending: "",
  //   month: ""
  // }
  var user_brand = await User_Brand.create({
    user_id: req.body.user_id,
    brand_id: req.body.brand_id,
    budget: req.body.budget,
    spending: 0,
    month: req.body.month
  });

  return res.json(user_brand);
}));

router.put('/budget/update', catchErrors(async (req, res, next) => {
  // 브랜드 예산 수정

  // {
  //   budget: "",
  //   id: ""
  // }
  var user_brand = await User_Brand.update({
    budget: req.body.budget
  }, {
    where: {
      id: req.body.id
    }
  });

  return res.json(user_brand);
}));

router.delete('/budget/delete', catchErrors(async (req, res, next) => {
  // 브랜드 예산 삭제

  // {
  //   id: ""
  // }
  var user_brand = await User_Brand.destroy({
    where: {
      id: req.body.id
    }
  });
  return res.json(user_brand);
}));


router.post('/spending/add', catchErrors(async (req, res, next) => {
  // 브랜드 지출 추가

  // {
  //   id: ""
  //   spending: ""
  // }
  var user_spending = await User_Brand.update({
    spending: req.body.spending
  }, {
    where: {
      id: req.body.id
    }
  });

  return res.json(user_spending);
}));

module.exports = router;