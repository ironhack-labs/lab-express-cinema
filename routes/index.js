const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

const Movie = require("../models/Movie.model.js");

router.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movies });
    })
    .catch((err) => console.error("error getting the movies", err));
});

router.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movie) => {
      console.log(movie);
      res.render("movie-details", { movie });
    })
    .catch((err) => console.error("Error getting movie by ID", err));
});

module.exports = router;
