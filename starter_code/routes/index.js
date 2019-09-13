const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find().then(movies => {
      res.render('movies', {movies})
  }).catch(error => {
    console.log(error)
  })
})

router.get('/movie/:id', (req, res, next) => {
  Movies.findById(req.params.id).then(movie => {
      console.log(movie)
      res.render('movie', {movie})
  }).catch(error => console.log(error))
})

module.exports = router;