const router = require("express").Router();
const Movie = require("../model/Movie.model.js");

// GET route to retrieve and display all the movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allTheMoviesFromDB) => {
    console.log("Retrieved movies from DB:", allTheMoviesFromDB);
      res.render("movies", { movies: allTheMoviesFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB", error);
      next(error)
    });
});

router.get("/movies/:movieId", (req, res) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then((theMovie) => res.render("movie-details", { movie: theMovie }))
    .catch((error) => {
      console.log("Error while retrieving movie details: ", error);
      next(error);
    });
});

module.exports = router;
