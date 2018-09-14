const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie.js")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {title: "Cinema Ironhack"});
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', {title: "Cinema Ironhack", movies});
    })
    .catch(err => next(err))
});

router.get('/movie/:id', (req, res, next) => {
  movie_id = req.params.id;
  Movie.findById(movie_id)
    .then(movie => {
      res.render('movie_detail', movie);
    })
    .catch(err => next(err))
});

module.exports = router;
