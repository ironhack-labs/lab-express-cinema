const router = require("express").Router();

const Movie = require("../models/Movie.model.js");

router.get("/movies", (req, res) => {
  Movie.find()
    .then((moviesFromDB) => {
      console.log("Retrieved movies from DB:", moviesFromDB);

      res.render("movies/movies.hbs", { movies: moviesFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the books from the DB: ", error);

      next(error);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((thisMovie) => {
      res.render("movies/movie-detail.hbs", thisMovie);
    })
    .catch((error) => {
      console.log("Error while getting the books from the DB: ", error);
      next(error);
    });
});

module.exports = router;
