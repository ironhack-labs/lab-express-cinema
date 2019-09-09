const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//GET movies page
router.get("/movies", (req, res) => {
  Movie.find()
    .then(movies => {
      res.render("movies.hbs", { movies });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:movieId", (req, res) => {
  Movie.findById(req.params.movieId)
    .then(movie => {
      res.render("movie.hbs", { movie });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
