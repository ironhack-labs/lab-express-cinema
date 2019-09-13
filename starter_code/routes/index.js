const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");
// const mongoose = require("mongoose");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies/", (req, res, next) => {
  Movie.find().then(movieList => {
    res.render("movies", { movieList});
  });
});

module.exports = router;
