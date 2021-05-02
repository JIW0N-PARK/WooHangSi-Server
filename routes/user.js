var express = require('express');
var router = express.Router();
var User = require('../models/user');
const catchErrors = require('../lib/async-error');

router.post('/register', catchErrors(async (req, res, next) => {
  // 사용자 등록

  // {
  //   user_id: "",
  //   name: ""
  // }
  var user = await User.findOne({ where: { user_id: req.body.user_id } });

  if(user){
    res.json('already exists');
  }
  else{
    user = await User.create({
    user_id: req.body.user_id,
    name: req.body.name
    });
    res.send('success');
  }
  return res.json(user);
}));

router.post('/get', catchErrors(async (req, res, next) => {
  // 사용자 가져오기

  // {
  //   user_id: ""
  // }
  var user = await User.findOne({ where: { user_id: req.body.user_id } });

  return res.json(user);
}));

module.exports = router;