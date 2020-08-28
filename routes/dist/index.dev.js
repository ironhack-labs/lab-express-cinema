"use strict";

var express = require('express');

var router = express.Router();

var Movie = require("../models/Movie.model");
/* GET home page */


router.get('/', function (req, res, next) {
  return res.render('index');
});
router.get("/movies", function _callee(req, res) {
  var movies;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Movie.find());

        case 2:
          movies = _context.sent;
          res.render("movies", {
            movies: movies
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get("/movie/:id", function _callee2(req, res) {
  var id, movie;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Movie.findById(id));

        case 3:
          movie = _context2.sent;
          res.render("movie", movie);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;