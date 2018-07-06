const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//lista de movies
router.get('/movies', (req, res) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {movies})
  }).catch(err => {
    console.log(err);
  });
});

//detalles de cada movie
router.get('/movies/:id', (req, res) => {
  let movieId = req.params.id
  Movie.findOne({'_id':movieId})
  .then(movie => {
    console.log(movie)
    res.render('movie_details', {movie})
  }).catch(err => {
    console.log(err)
  })
})
module.exports = router;