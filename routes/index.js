const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.models");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));
router.get("/movies", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.render("movies", { movies });
  } catch (error) {
    console.log(error);
  }
});
router.get("/movies/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    console.log(movie);
    res.render("movieInfo", { movie });
  } catch {
    console.log(error);
  }
});
module.exports = router;
