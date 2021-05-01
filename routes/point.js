var express = require('express');
var router = express.Router();
var Point = require('../models/point');
var Total_Point = require('../models/total_point');
const catchErrors = require('../lib/async-error');

router.post('/manage', catchErrors(async (req, res, next)=>{
  // 포인트 적립/차감

  // {
  //   point_amount: "",
  //   point_content: "", --> 적립 or 차감
  //   user_id: ""
  // }
  var point = await Point.create({
    point_amount: req.body.point_amount,
    point_content: req.body.point_content,
    user_id: req.body.user_id
  });

  var total = await Total_Point.findOne({user_id: req.body.user_id});

  if(total){
    if(req.body.point_content = '적립'){
      var total_plus = total.total_amount + req.body.total_point;
      total_point = await Total_Point.update({
        total_amount: total_plus
      }, {
        where: {
          user_id: req.body.user_id
        }
      });
      return res.json(total_point);
    } 
    else{
      var total_minus = total.total_amount - req.body.total_point;
      total_point = await Total_Point.update({
        total_amount: total_minus
      }, {
        where: {
          id: req.body.id
        }
      });
      return res.json(total_point);
    }
  }
  else{
    if(req.body.point_content = '적립'){
      var _total_plus = total.total_amount + req.body.total_point;
      total_point = await Total_Point.update({
        total_amount: _total_plus
      }, {
        where: {
          user_id: req.body.user_id
        }
      });
      return res.json(total_point);
    }
  }
}));

router.post('/', catchErrors(async (req, res, next) => {
  // 총 포인트 조회

  // {
  //   user_id: ""
  // }
  var total = await Total_Point.findOne({
    user_id: req.body.user_id
  });

  return res.json(total);
}));

router.post('/list', catchErrors(async (req, res, next) => {
  // 포인트 내역 조회

  // {
  //   user_id: ""
  // }
  var point_list = await Point.findAll({
    user_id: req.body.user_id
  });

  return res.json(point_list);
}));

module.exports = router;