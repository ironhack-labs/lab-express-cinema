const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

router.get("/movies", (req, res) => {
  Movie.find({})
    .then(moviesDoc => {
      res.render("movies.hbs", { movies: moviesDoc });
    })
    .catch(err => {
      console.log(err);
    });
    
});

router.get("/movies/:movieId", (req, res) => {
  Movie.findById(req.params.movieId)
    .then(movie => {
      res.render("movieDetails.hbs", { movie: movie });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
