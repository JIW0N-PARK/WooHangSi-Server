var express = require('express');
var router = express.Router();
var Point_List = require('../models/point_list');
var Total_Point = require('../models/total_point');
const catchErrors = require('../lib/async-error');

router.post('/manage', catchErrors(async (req, res, next)=>{
  // 포인트 적립/차감

  // {
  //   point_amount: "",
  //   point_content: "", --> 적립 or 차감
  //   user_id: ""
  // }
  var point_list = await Point_List.create({
    point_amount: req.body.point_amount,
    point_content: req.body.point_content,
    user_id: req.body.user_id
  });

  return res.json(point_list);
}));

router.post('/create', catchErrors(async (req, res, next)=>{
  // 총 포인트 생성 -> 총 포인트 생성이 되어 있지 않은 경우

  // {
  //   point_amount: "",
  //   point_content: "", --> 적립 or 차감
  //   user_id: ""
  // }
  var total = await Total_Point.findOne({user_id: req.body.user_id});

  if(total){
    total = await Total_Point.create({
      point_amount: req.body.point_amount,
      user_id: req.body.user_id
    });
    return res.json(total);
  }
  else{
    return res.send('Already Exists. So Need Update');
  }
}));

router.put('/update', catchErrors(async (req, res, next) => {
  // 포인트 적립/차감 -> 총 포인트 생성이 되어 있는 경우

  // {
  //   point_amount: "",
  //   point_content: "", --> 적립 or 차감
  //   user_id: ""
  // }
  if(req.body.point_content = '적립'){
    var point_plus = total.total_amount + req.body.total_point;
    var total_plus = await Total_Point.update({
      total_amount: point_plus
    }, {
      where: {
        user_id: req.body.user_id
      }
    });
    return res.json(total_plus);
  } 
  else{
    var point_minus = total.total_amount - req.body.total_point;
    var total_minus = await Total_Point.update({
      total_amount: point_minus
    }, {
      where: {
        id: req.body.id
      }
    });
    return res.json(total_minus);
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
  var point_list = await Point_List.findAll({
    user_id: req.body.user_id
  });

  return res.json(point_list);
}));

module.exports = router;