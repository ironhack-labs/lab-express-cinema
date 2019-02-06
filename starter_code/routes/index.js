const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movieResults => {
      // send the database query results to the HBS file as "bookArray"
      res.locals.movieArray = movieResults;
      res.render("movies.hbs");
    })
    // next(err) skips the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

module.exports = router;

router.get("/movies/:movieId", (req, res, next) => {
  // get the ID from the address (it's inside of req.params)
  const { movieId } = req.params;

  // find the book in the database using the ID from the address
  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render("movie-details.hbs");
    })
    // next(err) skips the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});
