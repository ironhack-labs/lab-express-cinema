const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesDB => {
      // console.log('Retrieved movies from DB:', moviesDB);
      res.render('movies' , { movies: moviesDB });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

module.exports = router;
