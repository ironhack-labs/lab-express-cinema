const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movies });
    })
    .catch((error) => console.log(error));
});

router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      res.render("movie-info", movie);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
