const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET Movies */
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", {movies});
    })
    .catch(error => console.log("Wir haben einen error", error));
});

router.get(`/movies/:movieId`, (req, res, next) => {
  let movieId = req.params.movieId;
  Movie.findOne({'_id' : movieId})
  .then(movie => {
    res.render('movie-info', movie)
  })
  .catch( error => console.log("Wir haben einen error", error))
})

module.exports = router;
