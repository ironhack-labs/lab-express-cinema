const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      console.log(error)
    })
  
});

router.get('/movie/:movieId', (req, res, next) => {
  const id = req.params.movieId;
  console.log("prueba")
  console.log(id)

  Movie.findById(id)
    .then(movie => {
      console.log(movie)
      res.render("movie", { movie });
    })
    .catch(error => {
      console.log(error)
    })
  
});

module.exports = router;
