const express = require("express");

const Movie = require("../models/movie-model");

const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(moviefromDb => {
      //res.send(moviefromDb);
      res.locals.movieList = moviefromDb;
      res.render("movies");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movieDetails => {
      res.locals.movie = movieDetails;
      res.render("movie-details");
    })
    .catch(err => {
      // show the error page with this error
      next(err);
    });
  // res.send(req.params);
});

module.exports = router;
