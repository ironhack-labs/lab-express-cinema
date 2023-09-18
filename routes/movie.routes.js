// routes/movie.routes.js

const router = require("express").Router();

const Movie = require("../models/Movie.model.js"); // this line before route

// Get route to retriev and display all movies

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      console.log("Retrieves movies from DB: ", allMovies);
      res.render("movies.hbs", { movies: allMovies }); // pass all movies to the view (as a variable in the HBS)
    })
    .catch((error) => {
      console.log("Error while getting movies from DB: ", error);
      // call the middleware-error to display error page to the user
      next(error);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((theMovie) => res.render("movie-details.hbs", { movie: theMovie }))
    .catch((error) => {
      console.log("Error while getting movies from DB: ", error);
      // call the middleware-error to display error page to the user
      next(error);
    });
});
module.exports = router;
