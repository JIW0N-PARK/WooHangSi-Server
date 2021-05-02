var express = require('express');
var router = express.Router();
var Entire = require('../models/entire');
const catchErrors = require('../lib/async-error');

router.post('/', catchErrors(async (req, res, next)=>{
  // 전체 예산/지출 조회

  // {
  //   user_id: "", --> INTEGER
  //   month: "" --> INTEGER
  // } 
  var entire = await Entire.findOne({
    where: {
      user_id: req.body.user_id,
      month: req.body.month
    }
  });

  if(entire){
    var entire_list = await Entire.findAll({
      where: {
        user_id: req.body.user_id,
        month: req.body.month
      }
    });
    return res.json(entire_list);
  }
  return res.send('Not Found');
}));

router.post('/add', catchErrors(async (req, res, next) => {
  // 전체 예산 추가

  // {
  //   budget: "", -> INTEGER
  //   user_id: "" -> INTEGER
  //   month: "" -> INTEGER
  // }
  var entire = await Entire.create({
    budget: req.body.budget,
    spending: 0,
    user_id: req.body.user_id,
    month: req.body.month
  });
  return res.json(entire);
}));

router.put('/update', catchErrors(async (req, res, next) => {
  // 전체 예산 수정

  // {
  //   budget: "", --> INTEGER
  //   entire_id: "" --> INTEGER
  // }
  var entire = await Entire.update({
    budget: req.body.budget
  }, {
    where: {
      entire_id: req.body.entire_id
    }
  });
  return res.json(entire);
}));

router.delete('/delete', catchErrors(async (req, res, next) => {
  // 전체 예산 삭제

  // {
  //   entire_id: "" --> INTEGER
  // }
  var entire = await Entire.destroy({
    where: {
      entire_id: req.body.entire_id
    }
  });
  // 1 = success
  return res.json(entire);
}));

module.exports = router;