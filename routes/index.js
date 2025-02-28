const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// Route to list all movies
router.get("/movies", (req, res, next) => {
  Movie.find() // Fetch all movies from the database
    .then((movies) => {
      console.log("Movies fetched from DB:", movies);
      res.render("movies", { movies });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB: ", error);
      next(error);
    });
});
router.get("/movies/:id", (req, res, next) => {
  const movieId = req.params.id; // Get the id from the URL

  Movie.findById(movieId) // find the movie in the database using the id
    .then((movie) => {
      if (!movie) {
        // If no movie found, send an 404 error to the error handling middleware
        return res.status(404).send("Movie not found");
      }
      res.render("movie-details", { movie }); // Render the movie details view with the movie data
    })
    .catch((error) => {
      console.log("Error while getting the movie details from the DB: ", error);
      next(error);
    });
});

module.exports = router;
