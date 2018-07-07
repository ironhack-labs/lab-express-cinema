const express = require('express');
const router  = express.Router();
const Movie   = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies',  (req, res, next) => {
  Movie.find()
  .then(movies =>{
    console.log(movies);
    res.render('movies', {movies});
  })
})

router.get('/movie/:id', (req, res, next) => {
  let _id = req.params.id
  Movie.findById(_id)
  .then(movie =>{
    console.log(movie)
    res.render('movie-detail', movie);
  }) 
})

module.exports = router;
