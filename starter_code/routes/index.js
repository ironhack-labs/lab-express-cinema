const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find().then(movies => {
    res.render('movies.hbs', { movies });
  }).catch(err => {

  })
});

router.get('/movies/:movieId', (req, res) => {
  
  Movie.findById(req.params.movieId).then(movie => {
    res.render('movie.hbs', { movie });
  }).catch(err => {

  })
});

module.exports = router;
