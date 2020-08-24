"use strict";

var express = require('express');

var router = express.Router();

var Movie = require('../models/Movie.model');
/* GET home page */


router.get('/', function (req, res, next) {
  Movie.find() // -> allTheBooksFromDB is a placeholder, it can be any word
  // |
  .then(function (allTheMoviesFromDB) {
    res.render('movies.hbs', {
      movies: allTheMoviesFromDB
    });
  })["catch"](function (error) {
    return console.log('Error while getting the books from the DB: ', error);
  });
});
router.get('/:movieId', function (req, res, next) {
  var movieId = req.params.movieId;
  Movie.findById(movieId).then(function (movieFromDB) {
    console.log(movieFromDB);
    res.render('../views/movies-details.hbs', {
      movie: movieFromDB
    });
  })["catch"](function (err) {
    return console.log("Error finding movie by Id: ".concat(err));
  });
});
module.exports = router;