const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.models");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
    Movie.find({})
    .then((moviesFromDB) => res.render('movies', {moviesFromDB}))
    .catch((error) => `Error while fetching movies: ${error}`)
})

router.get("/movies/:id", (req, res, next) => {
   
    Movie.findById(req.params.id)
      .then((movieDetails) => {
        res.render("movie-details", movieDetails);
      })
      .catch((error) =>
        console.log(`Error while getting a movie to dsplay: ${error}`)
      );
  });

module.exports = router;
