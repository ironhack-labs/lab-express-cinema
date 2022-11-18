const express = require('express');
const router = express.Router();

/* GET movie page */
//router.get('/movies', (req, res, next) => res.render('movies'));


const Movie = require("../models/Movie.model.js");

router.get("/movies", async (req, res, next) => {
  try {
    const allmovies = await Movie.find();
    res.render("movies", {movies: allmovies });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
});

router.get("/movies/:movieId", async (req, res, next) => {
    try {
      const { movieId } = req.params;
      const movies = await Movie.findById(movieId);
      res.render("movies-details",movies);
    } catch (error) {
      next(error);
    }
  });


module.exports = router;

