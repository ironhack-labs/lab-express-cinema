const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
  .then(movies => { 
    res.render('movies', { movies: movies });    
  })
  .catch(err => { console.log('An error occured', err) });
});

router.get('/movie/:idMovie', (req, res, next) => {
  console.log(req.params.idMovie)
  Movie.findById(req.params.idMovie)
  .then(movie => { 
    res.render('movie', { movie: movie });    
  })
  .catch(err => { console.log('An error occured', err) });
});

module.exports = router;
