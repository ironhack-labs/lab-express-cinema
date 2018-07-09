const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie')

/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find()
    .then((moviesArray) => {
      res.render('movies', {movies: moviesArray});
    })
    .catch((err) => {
      console.log(err);
    })
});

/* GET singleMovie page*/
router.get('/:id', (req, res, next) => {
  let theId = req.params.id;
  Movie.findById(theId)
  .then((theMovie) => {
    res.render('movieDetails', {movie: theMovie});
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;