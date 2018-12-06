const express = require('express');
const router  = express.Router();
const Movie   = require('../models/movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies=>{
    res.render('movies', {movies});
  })
  .catch(err=>{
    next(err)
  });
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findOne({_id:req.params.id})
  .then(movie=>{
    res.render('movie', {movie});
  })
  .catch(err=>{
    next(err)
  })
});


module.exports = router;
