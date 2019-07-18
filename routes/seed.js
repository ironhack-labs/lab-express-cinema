const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

router.post('/seed', function(req, res) {
  for(let movie of require("../bin/seeds.js")) {
    let newMovie = new Movie(movie)
    newMovie.save()
  }
  res.redirect("/movies");
})

module.exports = router;