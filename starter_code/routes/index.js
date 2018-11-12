const express = require('express');
const Movie = require('../models/Movie.js');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//listing all the movies
router.get('/movies', (req,res,next) => {
  Movie.find()
  .then(movieResult =>{
    res.locals.movieArray = movieResult;
    res.render('movies');
  })
  .catch(err =>next(err));
});

//getting details of one movie
router.get('/movie/:movieId', (req,res,next) =>{
  const {movieId} = req.params;
  Movie.findById(movieId)
  .then(movieDetails =>{
    res.locals.movieDet = movieDetails;
    res.render("movie-details");
  })
  .catch(err =>next(err));
});

module.exports = router;
