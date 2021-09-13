const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");
router.get("/", (req, res, next) => {
  Movie.find()
    .then((allMoviesFromDataBase) => {
      res.render("movies", { movies: allMoviesFromDataBase });
    })
    .catch((error) => {
      console.log("Error while getting the books from the DB:", error);
      next(error);
    });
});

module.exports = router;
