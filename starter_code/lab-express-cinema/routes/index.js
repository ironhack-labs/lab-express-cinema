const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies',(req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {header: 'Movies', movies});
  })
  //res.render('books');
});

router.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render('moviesDetail', {header: movie.title, movie})
  })
})

module.exports = router;
