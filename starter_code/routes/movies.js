const express = require('express');
const Movie = require('../models/Movie');
const fileMovies = require('../bin/seeds.js');
const router  = express.Router();



router.get('/', (req, res, next) => {
    //res.render('movies');
    Movie.find()
    .then((movies) => {
      res.render('movies', { movies })
    })
    .catch()
  });

  router.get('/info/:id', (req, res, next) => {
    const movieId = req.params.id
    Movie.findById(movieId)
      .then((movie) => {
        res.render('movieDetail', { movie })
      })
      .catch(error => console.log(error))
  
  });

  module.exports = router;