const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

const Movies = require("../models/Movie.model");

// GET movies page
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMoviesFromDB) => {
      res.render("movies/movie-list.hbs", { movies: allMoviesFromDB });
    })
    .catch((err) =>
      console.log("Error while getting movies from DB", err).next(err)
    );
});

// GET movies detail page
router.get("/movies/:movieId", (req, res) => {
  Movie.findById(req.params.movieId)
    .then((theMovie) => {
      const { title, director, stars, image, description, showtimes } =
        theMovie;

      res.render("movies/movie-detail.hbs", {
        title,
        director,
        stars,
        image,
        description,
        showtimes,
      });
    })
    .catch((err) =>
      console.log("Error while accessing the movies detail page", err)
    );
});
module.exports = router;
