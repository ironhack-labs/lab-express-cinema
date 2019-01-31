const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render('movies', { movies });
    });
});

/* GET movies description */
router.get('/movie/:id', (req, res, next) => {
  Movie.find({_id: req.params.id })
    .then((movie) => {
      console.log(movie);
      res.render('description', { movie });
    });
});

module.exports = router;