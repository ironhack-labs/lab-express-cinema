const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', (req, res) => {
    Movie.find().then((movies) => {
      res.render('movies', { movies: movies });
    }).catch(err => {
      console.log(err);
    })
  });
  
  router.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    Movie.findById(movieId).then(movie => {
      res.render('movieInfo', { movie: movie });
    }).catch(err => {
      console.log(err);
    });
  });


module.exports = router;