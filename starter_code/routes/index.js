const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find().then(moviesFromDb => {
    console.log('moviesFromDb',moviesFromDb)
    res.render('movies', { moviesForHBS:moviesFromDb })
  })
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findOne({'_id': req.params.id})
    .then(theMovie => {
    console.log('theMovie',theMovie)
    console.log(req.params.movieId);
    res.render('movie-details', { movie :theMovie })
  })
  .catch(error => {
    console.log('Error while retrieving movie details: ', error);
  })
});

module.exports = router;
