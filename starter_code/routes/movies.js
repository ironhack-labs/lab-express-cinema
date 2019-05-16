const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET movies page */
router.get('/', (req, res) => {
  Movie.find()
    .then(movies => {
      res.render('movies', {movies});
    })
    .catch(err => console.log('A ocurrido un error', err))
})


router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      console.log(movie)
      res.render('movie', {movie})
    })
    .catch(err => console.log('A ocurrido un error', err))
})

module.exports = router;