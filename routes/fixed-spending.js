var express = require('express');
var router = express.Router();
var User = require('../models/user');
const catchErrors = require('../lib/async-error');

router.post('/', catchErrors(async (req, res, next)=>{
  // 설정한 고정 지출 조회
}));

router.post('/add', catchErrors(async (req, res, next) => {
  // 고정 지출 추가
  // db 설계가 돼야 각이 나올 것 같음.
}));

router.delete('/delete', catchErrors(async (req, res, next) => {
  // 고정 지출 삭제
}));


router.post('/register', catchErrors(async (req, res, next) => {
  var err = validateForm(req.body);
  if(err){
    return res.send(err);
  }
  var user = await User.findOne({email: req.body.email});
  if(user) {
    return res.send('Already exists');
  }
  var password = await generateHash(req.body.password);
  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: password
  });
  res.send('Registered successfully.');
}));

module.exports = router;