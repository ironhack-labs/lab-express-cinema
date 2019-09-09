const express = require('express');
const Movie = require("../models/Movie");

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Register movies route
router.get("/movies", (req, res) => {
  Movie.find()
    .then(movies => {
      console.log(`MOVIES:`, movies);
      res.render("movies", { moviesList: movies });
    })
    .catch(err => console.log(`ERROR: Movies page could not be loaded.`, err));
});

// Register Single movie page
router.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;

  Movie.findById(movieId).then(movie => {
    res.render("movieDetails", {
      movie: movie
    });
  });
});


module.exports = router;
