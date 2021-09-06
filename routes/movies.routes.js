const router = require("express").Router();

const Movie = require("../models/Movie.model.js"); // <== add this line before your routes

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMoviesFromDB) => {
      console.log("Retrieved movies from DB:", allMoviesFromDB);
      res.render("movies/movies-list", { movies: allMoviesFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB: ", error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((thisMovie) => {
      res.render("movies/movies-detail", { movie: thisMovie });
    })
    .catch((error) => {
      console.log("Error while getting the movie from the DB: ", error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

module.exports = router;
