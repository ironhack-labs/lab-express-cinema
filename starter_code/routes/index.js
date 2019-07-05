const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((allTheMovies) => {

      res.render('movies', { theMovies: allTheMovies })
    })
    .catch((err) => {
      next(err)
    })
})

router.get('/movie/:movieID', (req, res, next) => {
  let theID = req.params.movieID
  Movie.findById(theID)
    .then((oneSingleMovie) => {
      res.render('movie', { theMovie: oneSingleMovie })
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router;
