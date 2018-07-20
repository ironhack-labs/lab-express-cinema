var express = require('express');
var router = express.Router();

/* GET movies page. */
router.get('/', function(req, res, next) {
  res.render('movies', { title: 'Cinema Ironhack - Movies' });
});

module.exports = router;