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

// Create route to update movie details
router.get("/:movieId/edit", (req, res, next) => {
  const movieId = req.params.movieId;

  Movie.findById(movieId)
    .then((movieDetails) => {
      res.render("movies/movie-edit", movieDetails);
    })
    .catch((err) => {
      console.log("Error getting movies details", err);
    });
});

// Create route for edit movie details
router.post("/:movieId/edit", (req, res, next) => {
  const movieId = req.params.bookId;
  const { title, director, stars, description, image, showtimes } = req.body;
  const newDetails = req.body;

  Movie.findByIdAndUpdate(movieId, newDetails)
    .then(() => {
      res.redirect(`/movies/${movieId}`);
    })
    .catch((err) => {
      console.log("Error updating movie details", err);
    });
});

module.exports = router;
