const express = require('express');
const router  = express.Router();

const Movie   = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//Retrieve all the movies
router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then( movies => {
      res.render('movie/list', {movies})
    })
})


//Retrieve one movie by id
router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id).then(movie =>
    res.render('movie/detail', {movie})
  )
})

module.exports = router;
