const express = require("express");

const Movie = require("../models/movie.js");

const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET Movies page */

router.get("/movies", (req, res, next) => {
  // whenever a user visits "/movies" find all the movies
  Movie.find()
    .then(movieResults => {
      console.log("We have MOVIES 📽");
      // send the database query results to the HBS file as "movieArray"
      res.locals.movieArray = movieResults;
      res.render("movies.hbs");
    })
    .catch(err => next(err));
  console.log("Finding movies FAILURE 💩");
});

/* GET Movie Details page */

router.get("/movies/:movieId", (req, res, next) => {
  // get the ID from the address (it's inside of req.params)
  const { movieId } = req.params;

  // find the book in the database using the ID from the address
  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render("movie-details.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
