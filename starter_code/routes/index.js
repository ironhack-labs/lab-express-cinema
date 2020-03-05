const express = require('express');
const router  = express.Router();
const Movies  = require('../models/movie') 

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(allMovies => {
    res.render('movies', {moviesData: allMovies});
  })
});

router.get('/movies/:id', (req, res, next) => {
  const paramMovieId = req.params.id
  Movies.findOne({_id: paramMovieId})
  .then(singleMovie => {
    res.render('individualMovie', {movieData: singleMovie});
  })
});

module.exports = router;