var express = require('express');
var router = express.Router();
var   times=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  times++;
  res.send(`User accessses are: ${times}`);
});

module.exports = router;
