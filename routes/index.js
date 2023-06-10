const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      console.log(moviesFromDB);
      res.render("movies", { movies: moviesFromDB });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/movies/:id", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then((movieFromDB) =>
      res.render("movie-details", { movie: movieFromDB })
    )
    .catch(error => {
      next(error);
    });
});

module.exports = router;
