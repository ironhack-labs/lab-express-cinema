const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movies');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res,next) => {
  Movie.find({}).then((movies)  => {
    res.render('movies', {movies})
  })
} )

router.get('/movies/:id', (req,res,next) => {
  console.log()
  Movie.findById(req.params.id).then((movie)  => {
    res.render('movie', {movie})
  })
  
} )

module.exports = router;
