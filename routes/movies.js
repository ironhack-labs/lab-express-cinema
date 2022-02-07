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

//===== Create GET-route /movies/create
router.get("/create", (req, res, next) => {
  res.render("movies/movie-create");
});

// ===== Create POST-route movies/create submit page
router.post("/create", (req, res, next) => {
  const { title, director, stars, description, image, showtimes } = req.body;
  const newDetails = req.body;

  Movie.create(newDetails)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("Error creating new movie", err);
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

//====== Create route to delete movie
router.post("/:movieId/delete", (req, res, next) => {
  const movieId = req.params.bookId;

  Book.findByIdAndDelete(movieId)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("Error deleting movie", err);
    });
});

module.exports = router;
