const router = require("express").Router();

const Movie = require("../models/Movie.model.js");

//movies route
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMoviesFromDB) => {
      res.render("movies", { allmovies: allMoviesFromDB });
    })
    .catch((error) => {
      console.log(`Error while retrieving movies from DB ${error}`);
      next(error);
    });
});

//movie details route
router.get("/movies/:id", (req, res, next) => {
  let movieId = req.params.id;

  Movie.findById(movieId)
    .then((MovieFromDB) => {
      res.render("movie-details", { movie: MovieFromDB });
    })
    .catch((error) => {
      console.log("Error while getting movie detail:", error);
      next(error);
    });
});

module.exports = router;
