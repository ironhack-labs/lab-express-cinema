const express = require('express');
const router = express.Router();
//import Movie from '/models'
const Movie = require('../models/Movie.model');

//********************************************************* */
//1. '/'home page
//********************************************************* */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Cinema | Home' });
});

//********************************************************* */
//2. '/movies' page
//********************************************************* */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesFromDB => {
      // console.log('moviesFromDB: ', moviesFromDB);
      res.render('movies-views/movies', {
        title: 'Cinema | Movies',
        movies: moviesFromDB,
      });
    })
    .catch(err => console.log(`Can't find the movie. ${err}`));
});

//********************************************************* */
//3. '/movies/movie/:movieId' page
//********************************************************* */
router.get('/movies/movie/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(moviesFromDB => {
      console.log('moviesFromDB: ', moviesFromDB);
      res.render('movies-views/movie-details', {
        title: 'Cinema | About',
        movie: moviesFromDB,
      });
    })
    .catch(err => console.log(`Can't find the movie. ${err}`));
});

module.exports = router;
