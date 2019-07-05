const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
   Movie.find()
   .then(movies => {
       res.render('movies', {movies});
   })
   .catch(err => console.log(err));
});

router.get('/movie/:id', (req, res) => {
  const movie = req.params.id;
  Movie.findById(movie)
      .then(movie => {
        console.log(movie);
          res.render('movie-details', movie);
      })
      .catch(err => console.log(err));
});

module.exports = router;
