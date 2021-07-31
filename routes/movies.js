const express = require("express");
const router = express.Router();

const Movie = require("../models/movies.model");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movies: movies });
    })
    .catch((err) => console.log("Error while requesting Movies", err));
});

module.exports = router;
