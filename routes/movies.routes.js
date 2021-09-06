const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model.js");

router.get("/movies-list", (req, res, next) => {
  Movie.find()
    .then((allTheMoviesFromDB) => {
      console.log("Retrieved movies from DB:", allTheMoviesFromDB);
      res.render("movies/movies-list.hbs", {
        movies: allTheMoviesFromDB,
      });
    })
    .catch((error) => {
      console.log(
        "Error while getting the movies from the DB: ",
        error.message
      );
      next(error);
    });
});

module.exports = router;
