const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model.js"); // <== add this line before your routes

// GET route to retrieve and display all the movies
router.get("/", (req, res, next) => {
  Movie.find()
    .then((allTheMoviesFromDB) => {
      // -> movies is a placeholder, it can be any word
      console.log("Retrieved movies from DB:", allTheMoviesFromDB);

      // we call the render method after we obtain the movies data from the database -> movies
      res.render("movies", { movies: allTheMoviesFromDB }); // pass `movies` to the view (as a variable movies to be used in the HBS)
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB: ", error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

router.get("/:movieId", (req, res) => {
  Movie.findById(req.params.movieId)
    .then((movie) => res.render("movie", movie))
    .catch((err) => console.log(err));
});

module.exports = router;
