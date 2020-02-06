const express = require('express');
const router = express.Router();
const movies = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  movies.find()
    .then((movies) => {
      // res.json(movies)
      res.render('movies', { movies })
    }).catch((err) => {
      console.log("espabila")
    });
});

router.get('/movie/:movieId', (req, res, next) => {
  console.log(req.params.movieId)
  movies.findById(req.params.movieId)
    .then((moviesFoundId) => {
      // res.json(movies)
      res.render('movieSelect', moviesFoundId)
    }).catch((err) => {
      console.log("espabila")
    });
});


module.exports = router;
