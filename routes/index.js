const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res, next) => {
  try {
    res.render("movies.hbs", {
      movies: await Movie.find(),
    });
  } catch (err) {
    next(err);
  }
});

router.get("/movie/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render("movieDetails", {movie});
  } catch (err) {
   next(err);
  }
});

module.exports = router;
