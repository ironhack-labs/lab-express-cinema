const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then((moviesToShow) => {
      console.log("Movies Showed", moviesToShow);
      res.render("movies", { movies: moviesToShow });
    })
    .catch((error) => {
      console.log("No movies found", error);
    });
});

router.get("/movie/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((moviebyId) => {
      console.log("Movie Chosen", moviebyId);
      res.render("movie-details", { movieDeatails: moviebyId });
    })
    .catch((error) => {
      console.log("Error while showing movie details", error);
    });
});
module.exports = router;
