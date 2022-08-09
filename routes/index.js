const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET movies page */
router.get("/movies", (req, res) => {
  Movie.find()
    .then((allMovies) => {
      res.render("movies", { movies: allMovies });
    })
    .catch((err) => {
      console.log(err);
    });
});

/* GET movie detail page */
router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      const { title, director, starts, image, description, showtimes } = movie;
      res.render("movie-detail", {
        title,
        director,
        starts,
        image,
        description,
        showtimes,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
