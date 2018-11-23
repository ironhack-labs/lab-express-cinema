const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', { movies });
    }).catch(err => {
      console.log(err)
    })
});

router.get('/movies/:id', (req, res) => {
  const { id } = req.params
  Movie.findById(id)
    .then(movie => {
      res.render('movie-detail', movie)
    }).catch(err => {
      console.log(err)
    })
})

module.exports = router;
