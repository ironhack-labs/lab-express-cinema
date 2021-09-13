const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.model.js");

// /* GET movies page */
router.get("/", (req, res, next) => {
  // .get("/") -> /movies
  // .get("/movies" ) /movies/movies
  Movie.find()
    .then((moviesFromDB) => {
      res.render("movies", { listMovies: moviesFromDB });
    })
    .catch((err) => {
      console.error(err);
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  // .get("/") -> /movies
  // .get("/movies" ) /movies/movies/:id
  Movie.findById(req.params.id)
    .then((movieId) => {
      res.render("movie-details", { uniqMovie: movieId });
    })
    .catch((err) => {
      console.error(err);
      next(error);
    });
});

module.exports = router;
console.error("¨HERE");
