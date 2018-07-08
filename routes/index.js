var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const data = {
    title: 'bichito'
  };
  // res.render('index', { title: 'Express' });
  res.render('index', data);
});

module.exports = router;
