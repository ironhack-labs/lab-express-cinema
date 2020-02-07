const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then( foundMovies => {
    console.log(foundMovies);
    res.render('movies', {foundMovies})
  })
  .catch( err => console.log('Error while getting movies ', err ) )
});

module.exports = router;