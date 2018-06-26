const express = require("express");

const Movie = require("../models/movie-model.js");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get;

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movieResults => {
      //send the database results to the view as "movieArray"
      res.locals.movieArray = movieResults;
      res.render("movies.hbs");
    })
    .catch(err => {
      //show our error page
      next(err);
    });
});

router.get("/movie/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render("movie-details.hbs");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
