// Packages
var express = require('express');
var router = express.Router();
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

module.exports = router;