const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET movies page */
router.get("/movies", (req, res, next) => {
  Movie.find().then((movies) => {
    res.render("movies-page", { movies });
  });
});

router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id).then((movie) => {
    res.render("movie-page-detail", { movie });
  });
});

module.exports = router;
