var express = require('express');
var router = express.Router();
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


module.exports = router;