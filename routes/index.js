const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */

// Iteration 2 - The home page

console.log("I'm in index.js")
router.get('/', function (req, res, next) {
    console.log("I'm within router.get");
    res.render('index');
});

// Iteration 3 - List the movies

router.get('/movies', function(req, res, next) {
    console.log("I'm within movies...");
    Movie.find()
    .then(movies => res.render('movies', {movies: movies}))
    .catch(error => {
      console.log('Error while getting the movies list from the DB: ', error);
    });
});

// Iteration 4 - Display movie details

router.get('/movies/:id', function (req, res, next) {
  console.log("I'm within movies details");
  Movie.findById(req.params.id)
  .then(movie => res.render('moviedetails', {movie: movie}))
  .catch(error => {
    console.log('Error while getting the movie Id from the DB: ', error);
  });
}); 

module.exports = router;
