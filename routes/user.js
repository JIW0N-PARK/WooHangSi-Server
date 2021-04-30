var express = require('express');
var router = express.Router();
var User = require('../models/user');
const catchErrors = require('../lib/async-error');

router.post('/', catchErrors(async (req, res, next) => {
  // 사용자 등록

  // {
  //   user_id: "",
  //   name: ""
  // }
  var user = await User.findOne({user_id: req.body.user_id});

  if(user){
    res.send('already exists');
  }
  else{
    user = await User.create({
    user_id: req.body.user_id,
    name: req.body.name
    });
    res.send('success');
  }
}));

module.exports = router;