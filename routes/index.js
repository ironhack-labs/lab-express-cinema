const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//movies route
router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
        //console.log('Retrieved books from DB:', allTheMoviesFromDB);
        res.render('movies', { movies: allTheMoviesFromDB });
      })
      .catch(error => {
          console.log('Error while getting the movies from the DB: ', error);
      })
});

//movie route by id
router.get('/movie/:movieId', (req, res, next) => {
    Movie.findById(req.params.movieId)
      .then(theMovie => {
        //console.log(theMovie);
        res.render('movie-detail', { movie: theMovie });
      })
      .catch(error => {
        console.log('Error while retrieving movie details: ', error);
      })
  });





module.exports = router;
