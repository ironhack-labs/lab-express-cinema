const express = require('express');
const router  = express.Router();

const Movie = require("../models/movie");

router.get("/movies", (req, res) => {
  Movie.find().then(movies => {
    console.log(movies);
    const moviesList = req.body;
    res.render("movies",{ moviesList });
  });
})
module.exports = router;