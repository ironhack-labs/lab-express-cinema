const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.model");

/* GET home page */
router.get("/", (req, res, next) => {
  Movie.find()
    .then((moviesArray) => {
      res.render("movies", { movies: moviesArray });
      console.log(moviesArray);
    })
    .catch();
});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((singleMovie) => {
      res.render("movie-details", { movies: singleMovie });
    })
    .catch();
});

module.exports = router;
