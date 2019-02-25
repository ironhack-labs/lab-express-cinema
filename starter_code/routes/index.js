const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js');

//home page
router.get('/', (req, res, next) => {
  res.render('index');
});

//directing to movie page
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(moviesDataBase => {
    res.render('movies', {movie: moviesDataBase});
  })
  .catch(error => {
    console.log('Error extracting data from /movies:', error);
  })
 
});

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findOne({_id: req.params.movieId})
  .then(singleMovie => {
    res.render('movie', {movie: singleMovie});
  })
  .catch(error => {
    console.log('Error extracting data from /movies:', error);
  })
 
});



module.exports = router;

