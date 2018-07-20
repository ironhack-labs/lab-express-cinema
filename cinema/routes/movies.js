var express = require('express');
var router = express.Router();
const Movie = require('../models/movie');

/* GET movies listing. */
router.get('/', function(req, res, next) {
  //recuperem les movies
  Movie.find({})
  .then((movies) => {
    res.render('movies', {movies});
  })
  .catch((err) => {
    next(err);
  })
});

router.get('/:id', (req, res, next) => {
    Movie.find({_id: req.params.id})
    .then((movie) => {
      console.log(movie[0]);
      res.render('detail', movie[0]);
    })
    .catch((err) => {
      console.log('error! ',err);
      next(err);
    })
});

module.exports = router;
