const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');


router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {movies})
  })
  .catch(err => {
    res.render('movies', {err});
  })
});

router.get('/movie/:id', (req, res, next)=> {
  const { id } = req.params
  Movie.findById(id)
  .then (movie => {
    res.render('detail', movie)
  })
  .catch(err => {
    res.render('detail', {err})
  })
})

module.exports = router;
