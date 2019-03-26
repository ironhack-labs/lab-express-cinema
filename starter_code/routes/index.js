const express = require('express');
const router  = express.Router();

// require Movie :
const Movie = require('../models/movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) =>{
  Movie.find({}) // all object, if i give an empty object 
    .then(fetchedMovies =>{
      debugger;
        console.log( 'Retrieving movies from DB:',   fetchedMovies[0]  )
       res.render( 'movies', { movies: fetchedMovies } ); 
    //messages is an [], to get an object, we say: {movies: movies} (the firrst of them is going to be the each loop)
      }) 
    .catch(err => {
      console.log('Error while getting the books from the DB: ', err);
    })
  });

  /* GET /more page */
router.get('/more/:movieId', (req, res, next) => {
  Movie.findOne( { _id: req.params.movieId } )
  .then( fetchedMovies => {
      console.log('Found the movie', fetchedMovies);
      res.render('more', {movie: fetchedMovies});
    debugger
    })
    .catch (err => {
      console.error(err);
    })
});



module.exports = router;
