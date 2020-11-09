const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      res.render("movies", { movies: moviesFromDB });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id).then((displayMovie) => {
    console.log(displayMovie);
    res.render("movie-details", { display: displayMovie });
  });
});

module.exports = router;
