const express = require('express');
const movies = require('Movie');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('movies', movies);
});

module.exports = router;
