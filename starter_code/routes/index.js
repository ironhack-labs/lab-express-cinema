const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
  .then (movies => {
    res.render('movies', {movies})
    //console.log(movies)
  })
  .catch(error => {
    console.log(error)
  })
});

router.get('/movies/:id', (req, res) => {
  let movieId = req.params.id
  Movies.findOne({'_id': movieId})
  .then ((movie) => {
    res.render('detalles', {movie})
  })
  .catch((err) => {
    console.log(err);
  })
})

module.exports = router;
