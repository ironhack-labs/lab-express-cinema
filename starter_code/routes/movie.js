const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then( foundMovies => {
    //console.log(foundMovies);
    res.render('movies', {foundMovies})
  })
  .catch( err => console.log('Error while getting movies ', err ) )
});

/* GET movie's detail page */
router.get('/movie/:movieId', (req, res, next) => {
  Movie.findById( req.params.movieId)
  .then( foundMovie => {
    res.render('movie-info', {foundMovie});
  })
  .catch( err => console.log(`Error while getting movie's details ${err}`) )
})

module.exports = router;