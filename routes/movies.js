var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/movies.hbs', { title: 'Movies'});
});

module.exports = router;