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

  module.exports = router;