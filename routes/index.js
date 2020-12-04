const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");
const { getMovies } = require("../controllers/movies.controlles");
/* GET home page */
router
  .get("/", (req, res, next) => res.render("index"))
  .get("/movies", async (req, res, next) => {
    const movies = await Movies.find();
    res.render("movies", { movies });
  })

  .get("/movie-detail", async (req, res) => {
    const movie = await Movies.findById(movie);
    res.render("movie-detail", movie);
  })

module.exports = router;
