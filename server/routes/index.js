var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.json({data:"ok"})
});

router.get('/aaa', function(req, res, next){
  var data = []
  res.json(data)
})

module.exports = router;
