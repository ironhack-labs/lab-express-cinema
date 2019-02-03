const express = require('express');
const router  = express.Router();
const importMovies = require('../models/Movie.js');


/* GET home page */
router.get('/', (req, res, next) => {
  importMovies.find({})
    .then((movies) => {
      // console.log(movies);
      res.render('movies', {
        movies,
      });
    })
    .catch(err => {
      console.error(`Error displaying movie's page`, err)
    });
});

router.get('/:movieId', (req, res, next) => {

  const { movieId } = req.params;
  importMovies.findById(movieId)
    .then((movie) => {
      // console.log(movie);
      res.render('movie-info', {
        movie,
      });
    })
    .catch(err => {
      console.error(`Error displaying movie's info page`, err)
    });
});

module.exports = router;
