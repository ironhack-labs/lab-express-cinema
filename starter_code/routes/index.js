const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(allMyMovies => {
      res.render("movies", { movies: allMyMovies });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movie/:id", (req, res, next) => {
  Movie.findOne({ _id: req.params.id })
    .then(theMovie => {
      res.render("movie", { movie: theMovie });
      console.log(allMyMovies);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
