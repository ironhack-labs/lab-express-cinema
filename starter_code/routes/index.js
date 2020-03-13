const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Get movies page 

router.get('/movies', (req, res, next) => {
  Movie.find().then(movies => {
    res.render('movies', {
      movies: movies
    });
  })
});

// Get movie detail page

router.get('/movies/:id', (req, res, next) => {
  console.log(req.params.id)
  Movie.findOne({
      '_id': req.params.id
    })
    .then(movie => {
      console.log(movie)
      res.render('movie', {
        movie: movie
      });
    })
});


module.exports = router;