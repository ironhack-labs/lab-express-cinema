const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res) => {
  res.render("index");
});

const data = require("../bin/seeds");
const Movies = require("../models/movie.model");

app.get("/movies", (req, res, next) => {
  Movies.insertMany(data)
    .them(allMovies => {
      res.render("movies", { movies: allMovies });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
