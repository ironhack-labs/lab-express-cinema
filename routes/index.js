const express = require("express");
const router = express.Router();
const Movies = require("../models/movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movies.find()
    .then((allTheMoviesFromDB) => {
      console.log("Retrieved movies from DB:", allTheMoviesFromDB);

      res.render("movies", { movies: allTheMoviesFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the books from the DB: ", error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  Movies.findById(req.params.movieId)
    .then((thisMovie) => {
      res.render("movies2", thisMovie);
    })
    .catch((error) => {
      // si falla
      console.log("Error while getting this book from the DB: ", error);
      next(error);
    });
});

module.exports = router;
