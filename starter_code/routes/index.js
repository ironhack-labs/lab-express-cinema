const express = require('express');
const Movie = require('../models/Movie');
const router  = express.Router();


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find()
  .then(films => {
    console.log(films);
    res.render('movies', { films });
  })
  .catch(err => console.log(err));
})

router.get('/movies/:movieID', (req, res) => {
  const theMovie = req.params.movieID
  Movie.findById(theMovie)
  .then(movieInfo => {
    console.log(movieInfo);
    res.render('movie-info', { movieInfo });
  })
  .catch(err => console.log(err));
})

module.exports = router;
