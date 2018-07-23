var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');

/* GET users listing. */
router.get('/', function (req, res, next) {
  Movie.find()
  .then(movies => {
    res.render('movies', { movies });
  })
  .catch(error => {
    console.log(error);
  })
});

router.get('/movie/:id', function (req, res, next) {
  const { id } = req.params;
  Movie.findById(id)
  .then(movie => {
    res.render('more', movie);
  })
  .catch(error => {
    console.log('error', error);
  });
});

module.exports = router;
