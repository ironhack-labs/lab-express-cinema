const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res, next) => {
  Movie.find()
  .then(allMoviesFromDB => {
    
    res.render('movies-list', {movies: allMoviesFromDB});
  })
  .catch(error => console.log('Error while getting the movies from the DB: ', error))
});

router.get('/movies/:movieId', (req, res)=>{

  Movie.findOne(req.params.id)
  .then(theMovie => res.render ('movie-details', {movie: theMovie}))
  .catch(error=> console.log('Error while retrieving movie details: ', error))
    
});



module.exports = router;
