const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then((allTheMovies) => console.log({ allTheMovies }))
    .then((allTheMovies) => res.render("movies", { allTheMovies }))
    .catch((err) => console.log(err));
});

router.get("/movie/:id", (req, res, next) => {
  const { id } = req.params;

  Movie.find(id)
    .then((data) => res.render("movie", { data }))
    .catch((err) => console.log(err));
});

module.exports = router;
