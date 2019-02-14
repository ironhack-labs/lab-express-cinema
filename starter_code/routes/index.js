const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs');
});

router.get('/movies', (req, res, next) => {
  Movie.find().then(AllTheMoviesFromTheDatabase => {
    console.log(AllTheMoviesFromTheDatabase)
    res.render('movies.hbs',{showMoviesInHBS: AllTheMoviesFromTheDatabase});
  })
});


router.get('/movie/:id', (req, res, next) => {
  console.log(req.params)
  Movie.findOne({_id:req.params.id}).then(aMovieFromTheDatabase => {
    console.log(aMovieFromTheDatabase)
    res.render('movie-detail.hbs',{showMoviesInHBS: aMovieFromTheDatabase});
  })
});

module.exports = router;