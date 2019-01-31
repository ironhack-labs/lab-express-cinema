const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// home page
router.get('/', (req, res, next) => {
  res.render('index');
});

// movies page
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies', { movies });
    })
    .catch(err => {
      console.log(err);
    });
});

// detail page
router.get('/detail/:id', (req, res, next) => {
  let movieId = req.params.id;

  Movie.findById(movieId)
  .then(movie => {
    res.render('detail', {movie})
  })
  .catch(err => {
    console.log(err)
  })
})


module.exports = router;
