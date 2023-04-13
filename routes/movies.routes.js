const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/", (req, res, next) => {
  Movie.find({})
  .then((movies) => {
    console.log(`Movies from DB: ${movies.title}`);
    res.render("movies/movies", { movies });
  });
});

module.exports = router;
