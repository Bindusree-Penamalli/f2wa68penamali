var express = require('express');
var router = express.Router();

/* Correct */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'BindusreePenamalli' });
});

