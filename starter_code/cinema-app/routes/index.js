var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  /* 'index es el nombre de la vista a la que accedemos a traves de app */
});

module.exports = router;
