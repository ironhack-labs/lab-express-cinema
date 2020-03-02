const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log('Retrieved movies from DB:', movies);
      res.render('movies', { movies });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

module.exports = router;
