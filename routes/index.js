const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movieDB: movies });
    })
    .catch((error) => console.log("Error getting movies from the DB: ", error));
});

router.get("/movie/:id", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then((movie) => {
      res.render("movie.Details", { movieDB: movie });
    })
    .catch((error) => console.log("Error getting movies from the DB: ", error));
});

module.exports = router;
