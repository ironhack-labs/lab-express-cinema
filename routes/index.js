const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movies: movies });
    })
    .catch(console.log);
});

router.get("/movies/:id", (req, res, next) => {
  const  movieId = req.params;

  Movie.findById(movieId.id)
    .then((movie) => {
        res.render("movieDetails", {movie: movie})
    })
    .catch(console.log);
});

module.exports = router;
