const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(error => {
      console.log("Error:", error)
    })
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movie-detail', { movie });
      console.log(movie)
    })
    .catch(error => {
      console.log("Error:", error)
    })
});

module.exports = router;
