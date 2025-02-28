const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET movies page */
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      res.render("movies", { movies: moviesFromDB });
    })
    .catch((error) => {
      console.error("Error retrieving movies from database:", error);
      next(error);
    });
});

/* GET movie details page */
router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        return res.status(404).render("not-found");
      }
      res.render("movie-details", { movie });
    })
    .catch((error) => {
      console.error("Error retrieving movie details:", error);
      next(error);
    });
});

module.exports = router;
