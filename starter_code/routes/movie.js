const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', {
        movies, 
      });
    })
    .catch(err => console.log('Error while getting movies ', err))
});

module.exports = router;
