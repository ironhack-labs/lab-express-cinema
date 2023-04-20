const express = require("express");
const router = express.Router();
const Movie = require("./../models/Movie.model");

//ruta home
router.get("/", (req, res, next) => res.render("index"));

//ruta movies
router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    // console.log('All movies: ', allMovies)

    res.render("/movies", { allMovies });
  } catch (error) {
    next(error);
  }
});

module.exports = router; //exporto el router
