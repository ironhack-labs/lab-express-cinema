const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

/* GET movies page. */
router.get('/', function (req, res, next) {
  Movie.find()
    .then(movies => {
      console.log(movies);
      res.render('movies/list', { movies });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', function (req, res, next) {
  const {id} = req.params;
  Movie.findById(id)
    .then(movie => {
      res.render('movies/movie', movie);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;