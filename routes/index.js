const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET - all movies */
router.get("/movies", (req, res, next) => {
  Movie.find() 
    .then((movies) => {
      console.log("Movies from DB:", movies);
      res.render("movies", { movies });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB: ", error);
      next(error);
    });
});

/* GET - movies by ID */
router.get("/movies/:id", (req, res, next) => {
  const movieId = req.params.id; 

  Movie.findById(movieId) 
    .then((movie) => {
      if (!movie) {
        return res.status(404).send("Movie not found");
      }
      res.render("movie-details", { movie }); 
    })
    .catch((error) => {
      console.log("Error while getting the movie details from the DB: ", error);
      next(error);
    });
});

module.exports = router;