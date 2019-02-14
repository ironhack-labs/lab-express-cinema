const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* MOVIES PAGE */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(moviesFromDB => {
    //console.log('movies from DB:', moviesFromDB);
    res.render('movies', {movies: moviesFromDB});
  })
  .catch(error => {
    console.log('Error while getting movies from DB:', error);
  })
 
});

/* MORE INFO */
router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
  .then(theMovie =>{
    res.render('movie-details', {movie: theMovie});
  })
  .catch(error => {
    console.log('Error while retrieving movie details: ', error);
  })
});



module.exports = router;
