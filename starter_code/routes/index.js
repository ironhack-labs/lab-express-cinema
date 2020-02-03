const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.model');

// GET home page 
router.get('/', (req, res, next) => {
  res.render('index');
});


// GET movies page 
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(allMoviesFromDB => {
        console.log('Movies from the DB: ', allMoviesFromDB);
        res.render('movies', { movies: allMoviesFromDB });
    })
    .catch(err => console.log(`An error has occured ${err}`));
});

// GET movie details page
router.get('/movie-details/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(theMovie => {
    res.render('movie-details', {movie: theMovie});
  })
  .catch(err => console.log(`An error has occured ${err}`));
});

module.exports = router;
