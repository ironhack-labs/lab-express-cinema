const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(allTheMoviesFromDB => {
      console.log("Retrieved movies from DB:", allTheMoviesFromDB);
      res.render("movies", { movie: allTheMoviesFromDB });
    })
    .catch(error => {
      console.log("Error while getting the books from the DB: ", error);
    });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovie => {
      res.render("movie-details", { movie: theMovie });
    })
    .catch(error => {
      console.log("Error while retrieving book details: ", error);
    });
});

module.exports = router;
