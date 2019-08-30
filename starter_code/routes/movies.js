const express = require("express");
const router = express.Router();
const movies = require("../models/Movie.js");

/* GET home page */
router.get("/movies", (req, res, next) => {
  movies
    .find()
    .then(alltheMoviesFromDB => {
      console.log("Retrieved movies from DB:", alltheMoviesFromDB);
      res.render("movies", { movies: alltheMoviesFromDB });
    })
    .catch(error => {
      console.log("error while getting movies from the DB: ", error);
    });
});

module.exports = router;
