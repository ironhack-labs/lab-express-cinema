const express = require('express');
const router  = express.Router();


// Retrieving movies //
const Movie = require('../models/movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    console.log("Consulta realizada!!")
    console.log(movies)
    res.render('movies', {movies});
  })
  .catch(error => {
    console.log(error)
  })
});


router.get('/movie/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id': movieId})
    .then(movieData => {
      res.render("movie-detail", { movieData })
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
