const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movies.find()
    .then(movies => {
      console.log('Movies', movies);
      res.render('movies', { movies });
    })
    .catch(err => console.log('Error: ', err));
});

router.get('/movies/:id', (req, res) => {
  console.log(req.params);   
  Movies.findById(req.params.id)
    .then(movie => {
      console.log('Movie', movie);
      res.render('movie-info', { movie });
    })
    .catch(err => console.log('Error: ', err));
})

module.exports = router;
