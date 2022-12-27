const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/", (req, res) => {
  Movie.find()
    .then((foundMovies) => res.render("movies", { movies: foundMovies }))
    .catch((err) => res.send(err));
});

module.exports = router;
