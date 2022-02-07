const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      //console.log(movies);
      res.render("movies", { movies: moviesFromDB });
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      res.render("movie-details", movie);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});




module.exports = router;
