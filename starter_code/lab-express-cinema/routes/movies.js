// Packages
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');


// Get Home page
router.get('/', function(req, res) {
  Movie.find()
  .then(movies => {
    res.render("movies", {"tabtitle": "Movies", "moviesList": movies})
  })
  .catch( error => {
    console.error('Error reading movies!', error)
  })
});

router.get('/:id', function(req, res) {
  const {id} = req.params;
  Movie.findById(id)
  .then(movie => {
    res.render("movie-info", {"tabtitle": movie.title, "movie": movie})
  })
  .catch( error => {
    console.error(`Error reading movie with ${id}!`, error)
  })
});

module.exports = router;