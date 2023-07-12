const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// GET movies page
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => res.render("movies", { moviesFromDB }))
    .catch((err) => res.status(500).send(err));
});

// GET movie detail
router.get("/movie/:movieId", (req, res) => {
  Movie.findById(req.params.movieId)
    .then((theMovie) => {
      console.log(theMovie);
      res.render("movie", { theMovie });
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
