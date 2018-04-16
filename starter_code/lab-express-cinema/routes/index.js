const express = require('express');
const router  = express.Router();

const Movie = require("../models/movie-model");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
  .then( (movies) => {
    res.locals.movies = movies;
    res.render('movies');
  })
  .catch( (err) => {
    console.log('Error when trying connect with database', err);
  });
});

router.get('/movieItem/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
  .then( (data) => {
    // console.log(data);
    res.locals.movie = data;
    res.render('movieItem');
  })
  .catch( (err) => {
    console.log('Error when trying connect with database', err);
  });
});

module.exports = router;
