const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')
const movies = require('../bin/seeds')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res) => {
  Movie.find({})
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(err => console.log(err));
});

router.get("/movie/:id", (req, res) => {
  let movieId = req.params.id;
  Movie.findOne({"_id" : movieId})
    .then(movie => {
      res.render('movie', { movie });
    })
    .catch(err => console.log(err));
});

module.exports = router;