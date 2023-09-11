var express = require('express');
var router = express.Router();

// var destinations = require('../models/destination');

/* GET destinations listing. */
router.get('/', function (req, res, next) {
  res.redirect('/destinations');

});

module.exports = router;
