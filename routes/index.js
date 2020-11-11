const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => {
  console.log("xx");
  res.render('index')});

// Movies TODO: add route here
router.get("/movies", (req, res) => {
  console.log("stuff and things")
  Movie.find({})
  .then((moviesFromDB) => res.render('movies', {moviesFromDB}))
  .catch((error) => `Error while fetching movies: ${error}`)
})

router.get("/movies/:id", (req, res, next) => {

  Movie.findById(req.params.id)
    .then((movieDetails) => {
      res.render("movie-details", movieDetails);
    })
    .catch((error) => `Error while fetching the movie: ${error}`);
})

module.exports = router;
