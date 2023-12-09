// Define all the routes related to the Book model
const router = require("express").Router();

const Movie = require("../models/Movie.model.js"); // <== add this line before your routes

// GET route to retrieve and display all the movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allTheMoviesFromDB) => {
      // -> allTheMoviesFromDB is a placeholder, it can be any word
      //   console.log("Retrieved movies from DB:", allTheMoviesFromDB);

      res.render("movies.hbs", { movies: allTheMoviesFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB: ", error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});
// GET route to retrieve and display details of a specific book

router.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;

  Movie.findOne({ _id: movieId })
    .then((foundMovie) => {
      console.log("foundMovie", foundMovie);
      res.render("movie-details.hbs", foundMovie);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
