var express = require('express');
var router = express.Router();
var Brand = require('../models/brand');
var User_Brand = require('../models/user_brand');
const catchErrors = require('../lib/async-error');

router.post('/add', catchErrors(async (req, res, next)=>{
  // 브랜드 추가
  var brand = await Brand.create({
    brand_name: req.body.brand_name,
    category_id: req.body.category_id
  });

  return brand;
}));

router.post('/budget/add', catchErrors(async (req, res, next) => {
  // 브랜드 예산 추가
  var user_brand = await User_Brand.create({
    brand_id: req.body.budget,
    user_id: req.body.user_id,
    budget: req.body.budget,
    spending: req.body.spending
  });

  return user_brand;
}));

router.put('/budget/update', catchErrors(async (req, res, next) => {
  // 브랜드 예산 수정
  var user_brand = await User_brand.update({
    budget: req.body.budget
  }, {
    where: {
      id: req.body.id
    }
  });
  return User_brand;
}));

router.delete('/budget/delete', catchErrors(async (req, res, next) => {
  // 브랜드 예산 삭제
  var user_brand = await User_Brand.destroy({
    where: {
      id: req.body.id
    }
  });
  return user_brand;
}));


router.post('/spending/add', catchErrors(async (req, res, next) => {
  // 브랜드 지출 추가
  var user_spending = await User_Brand.update({
    spending: req.body.spending
  }, {
    where: {
      id: req.body.id
    }
  });

  return user_spending;
}));

module.exports = router;