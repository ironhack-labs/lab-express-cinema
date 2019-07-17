const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/movies', (req, res, next) => {
  Movie.find({}).then((data) => {
    res.render("movies", {movies: data})
  })
});

module.exports = router;
