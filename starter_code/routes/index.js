const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res) => {
  Movie.find({})
    .then(documents => {
      // res.send(documents);
      res.render("movies.hbs", {
        movies: documents
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movies/:movieId", (req, res) => {
  Movie.findById(req.params.movieId)
    .then(movie => {
      res.render("movieDetails", {
        movie: movie
      });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;