const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(allTheMoviesFromDB => {
        console.log('retrieved movies: ', allTheMoviesFromDB);
    res.render('movies', {
        movies: allTheMoviesFromDB
    })
})
.catch(error => {
    console.log('Error getting the movies', error)
})
});


  router.get('/movies/:movieId', (req, res, next) => {
    let movieId = req.params.movieId;
    Movie.findById(movieId)
      .then(theMovie => {
console.log(theMovie);
        res.render('movie-details', { movie: theMovie });
      })
      .catch(error => {
        console.log('Error while retrieving movie details: ', error);
      })
  });

module.exports = router;
