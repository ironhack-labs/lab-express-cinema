const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')
const mongoose = require('mongoose');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(allMovies => {
      return res.render('movies', { allMovies });
    })
    .then(() => {
      mongoose.connection.close()
      console.log('Conection close');
    })
    .catch(err => console.log(err))


});

router.get('/movie/:idMovie', (req, res, next) => {
  let id = req.params.idMovie;
  Movie.findById(id)
    .then(movie => {
      return res.render('movie', { movie });
    })
    .then(() => {
      mongoose.connection.close()
      console.log('Conection close');
    })
    .catch(err => console.log(err))


});

module.exports = router;
