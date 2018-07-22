var express = require('express');
var router = express.Router();

var Movie = require('../models/movie.js')

router.get('/', (req, res, next) => {
  Movie.find({})
  .then((movies) => {
    res.render('movies', { movies });
  })
  .catch((err) => {
    next(err);
  })
});

module.exports = router;