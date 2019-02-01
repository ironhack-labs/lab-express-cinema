const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.js');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
    .then((movie) => {
      console.log('Estas son las pelis' + movie);
      res.render('movie', { movie });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/movie/:title', (req, res, next) => {
  const moviesName = req.params.title;
  Movies.findOne({ title: moviesName });
  then((movie) => {
    res.render('movie', { movie });
  }).catch((error) => console.log(error));
});

module.exports = router;
