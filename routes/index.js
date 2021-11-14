const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
  Movie.find().then(allmovies => {
    console.log(allmovies);
    res.render('movies', allmovies);
  });
});

router.get('/movie/:id', (req, res) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      console.log(movie);
      res.render('movie-details', movie);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
