const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({}).then( movies => {
    console.log(movies)
    res.render('movie/movies', {movies});
  })
  .catch(err => {console.log("Error!!!")})
});

router.get('/movies/:id', (req, res, next) => {
  Book.findById(req.params.id).then( movie => {
    
      res.render('movie/detail', {movie});
  })
});


module.exports = router;
