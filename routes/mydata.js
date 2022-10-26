var express = require('express');
var router = express.Router();

/* Correct */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BindusreePenamalli' });
});

module.exports = router;
