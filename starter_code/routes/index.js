const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/**
 * GET movies page and pull data from database for the display
 */
router.get('/movies', (req, res, next) => {

  Movie.find({})
    .then(movies => {
      res.render('movies', {movies: movies});
    })
    .catch(err => { console.log('An error occurred: ', err)});
});


router.get('/movie/:id', (req, res, next) => {
  console.log(req.params.id);
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movie', movie);
    })
    .catch(err => { console.log('An error occurred: ', err)});
});

module.exports = router;
