const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;


//Route for displaying all movies in the database
router.get('/movies', (req,res,next) => {
  Movie.find()
    .then(allMovies => {
      console.log('All Movies: ' ,allMovies)
      res.render('Movies', {Movies: allMovies})
  })
  .catch(error => {
    console.log('Error while getting the movies from the DB: ', error);
  })
});



//Get Details of the movie
router.get('/movie/:id', (req,res,next)=>{
  Movie.findById(req.params.id)
  .then(theMovie => {
    res.render('movie', {movie: theMovie})
  })
  .catch(error => {
    console.log('Error while retrieving Movie details: ', error);
  })
})