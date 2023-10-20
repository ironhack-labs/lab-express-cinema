const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => {
    res.render("index");
});

// all movies
router.get("/movies/allMovies", (req, res) => {
  res.render("movies/allMovies")  
})

// create movie
router.get("/movies/create", (req, res) => {
    res.render("movies/create")  
  })

// all movies

// single movie

// update movie

// delete movie
module.exports = router;