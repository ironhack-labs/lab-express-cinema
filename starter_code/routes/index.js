const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  MovieModel
    .find()
    .then(movies => {
      console.log('success', movies)
      res.render('movies', {
        movies
      })
    })
    .catch(dbErr => console.log('error', dbErr))

})

router.get('/movies/:id', (req, res) => {
  MovieModel
    .findById(req.params.id)
    .then(movie => {
      console.log('success', movie)
      res.render('page-movie', {
        movie
      })
    })
    .catch(dbErr => console.log('error', dbErr))

})

module.exports = router;