const router = require("express").Router();
const Movie = require("../models/Movie.model");

//== Create route to /movies
router.get("/", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      res.render("movies/movies-list", { movies: moviesFromDB });
    })
    .catch((err) => {
      console.log("Error getting movies from DB...", err);
    });
});

//== Create route to /movies/movie-details
router.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;

  Movie.findById(movieId)
    .then((movieDetails) => {
      res.render("movies/movie-details", movieDetails);
    })
    .catch((err) => {
      console.log("Error getting movies details", err);
    });
});

module.exports = router;
