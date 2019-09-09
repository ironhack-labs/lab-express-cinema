const express = require('express');
const Movie = require("../models/Movie"); 

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res) => {
  // get all the books
  // render a 'books' view with the books data

  Movie.find().then(movies => {
    res.render("movies", { movieList: movies });
  });
});

router.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;

  Movie.findById(movieId).then(movie => {
    res.render("movieDetails", { movie: movie, title: "123" });
  });
});

module.exports = router;


