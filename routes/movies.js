const router = require("express").Router();

const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allTheMovies) => {
      console.log("Retrieved movies:", allTheMovies);

      res.render("movies/movies.hbs", { movies: allTheMovies });
    })
    .catch((error) => {
      console.log("Error while getting the movies: ", error);

      next(error);
    });
});

router.get("/movies/:id", (req, res, next) => {
  console.log(req.params.id);

  Movie.findById(req.params.id)
    .then((theMovie) =>
      res.render("movies/movie-details.hbs", { movie: theMovie })
    )
    .catch((error) => {
      console.log("Error while retrieving movie details: ", error);
      res.render("movies/movie-details.hbs", { movie: theMovie });

      next(error);
    });
});

module.exports = router;
