"use strict";

var express = require('express');

var router = express.Router();

var Movie = require('../models/Movie.model');

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