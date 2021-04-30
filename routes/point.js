var express = require('express');
var router = express.Router();
var Point = require('../models/point');
var Total_Point = require('../models/total_point');
const catchErrors = require('../lib/async-error');

router.post('/manage', catchErrors(async (req, res, next)=>{
  // 포인트 적립/차감
  var point = await Point.create({
    point_id: req.body.point_id,
    point_amount: req.body.point_amount,
    point_content: req.body.point_content,
    user_id: req.body.user_id
  });

  var total = await Total_Point.findOne({user_id: req.body.user_id});

  if(total){
    if(req.body.point_contnet = '적립'){
      var total_plus = total.total_amount + req.body.total_point;
      total_point = await Total_Point.update({
        total_amount: total_plus
      }, {
        where: {
          user_id: req.body.user_id
        }
      });
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
    }
  }
  else{
    if(req.body.point_contnet = '적립'){
      var _total_plus = total.total_amount + req.body.total_point;
      total_point = await Total_Point.update({
        total_amount: _total_plus
      }, {
        where: {
          user_id: req.body.user_id
        }
      });
    }
  }

  return point;
}));

router.post('/', catchErrors(async (req, res, next) => {
  // 총 포인트 조회
  var total = await Total_Point.findOne({
    user_id: req.body.user_id
  });

  return total;
}));

router.put('/list', catchErrors(async (req, res, next) => {
  // 브랜드 예산 수정
  var point_list = await Point.findAll({
    user_id: req.body.user_id
  });

  return point_list;
}));

module.exports = router;