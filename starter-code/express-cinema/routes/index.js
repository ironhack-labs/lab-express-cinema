const express = require('express');
const router  = express.Router();
const Movie = require( "../models/movie-model" );

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
})

router.get( "/movies", ( req, res, next ) => {
  Movie.find()
    .then(( oneMovie ) => {
      res.locals.movie = oneMovie;
      res.render( "movies" );
    })
    .catch(( err ) => {
      next( err );
    })
})

router.get( "/movie/:movieId", ( req, res, next ) => {
  Movie.findById( req.params.movieId )
    .then(( movieDetails ) => {
      res.locals.oneMovie = movieDetails;
      res.render( "one-movie" );
    })
    .catch(( err ) => {
      next( err );
    })
})


module.exports = router;
