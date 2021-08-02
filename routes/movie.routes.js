const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMoviesFromDb) => {
      console.log(allMoviesFromDb);
      res.render("movies", { movies: allMoviesFromDb });
    })
    .catch((error) => {
      console.log("error while listing movies", error);
      next(error);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;

  Movie.findById(movieId)
    .then((singleMovieFromDb) => {
      console.log(singleMovieFromDb);
      res.render("movie-details", { movie: singleMovieFromDb });
    })
    .catch((error) => {
      console.log("error while listing movies", error);
      next(error);
    });
});

module.exports = router;