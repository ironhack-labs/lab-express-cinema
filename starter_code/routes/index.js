const express = require('express');
const router  = express.Router();

// require Movie :
const Movie = require('../models/movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) =>{
  Movie.find()
    .then(movies =>{
        console.log( 'Retrieving movies from DB:',   movies  )
    res.render( 'movies', { movies } );
    }) 
    .catch(err => {
      console.log('Error while getting the books from the DB: ', err);
    })
  });

  /* GET /more page */
router.get('/more/:movieId', (req, res, next) => {
  Movie.findOne( { '_id':req.params.movieId } )
  .then( theMovie => {
      console.log('Found the movie', movie);
      res.render('more', {theMovie});
    debugger
    })
    .catch (err => {
      console.error(err);
    })
});



module.exports = router;
