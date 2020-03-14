const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js'); 

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allTheMoviesFromDB => {
      // console.log('Retrieved movies from DB:', allTheMoviesFromDB);
      res.render('movies', { movies: allTheMoviesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      console.log('Retrieved movies from DB:', movie);
      res.render('movie', { movie });
    })
    .catch(error => {
      console.log('Error while getting the THE MOVIE from the DB: ', error);
    })
});

module.exports = router;
