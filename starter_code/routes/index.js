const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find({}).then(allMovies => {
    res.render("movies", { allMovies, host: process.env.HOST })
  })
});

router.get("/movie/:id", (req, res, next) => {
  Movies.findById(req.params.id)
    .then(movie => {
    res.render("movie-detail", { movie });
    });
});

module.exports = router;
