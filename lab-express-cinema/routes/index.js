const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movie => {
      res.render("movies", { movie });
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/movies/:id', (req, res, next) => {
  let movieID = req.params.id;
  Movie.findOne({'_id': movieID})
    .then(movie => {
      res.render("movie-details", { movie })
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
