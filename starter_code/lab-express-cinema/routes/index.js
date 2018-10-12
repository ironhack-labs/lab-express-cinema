// Packages
var express = require('express');
var router = express.Router();

// Get Home page
router.get('/', function(req, res) {
  res.render('index', {"tabtitle": "Home"});
});

module.exports = router;