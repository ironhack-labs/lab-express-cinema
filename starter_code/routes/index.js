const express = require('express');
const router = express.Router();
const movies = require('../models/movie');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  movies.find()
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(err => console.log(err));
})

router.get('/movies/:movieID', (req, res) => {
  const Movie = req.params.movieID;
  movies.findById(Movie)
    .then(movies => {
      res.render('movie-details', { movies });
    })
    .catch(err => console.log(err));
})
module.exports = router;
