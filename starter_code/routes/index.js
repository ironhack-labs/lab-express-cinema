const express = require('express');
const router  = express.Router();
//añadir modelos
const Movie = require('../models/Movie.js');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(allMovies => {
  console.log('Retrieved all movies from DB:', allMovies);
  res.render('movies', { movies: allMovies });

  })
  .catch(error => {
  console.log('Error while getting the books from the DB: ', error);
  })

});


router.get('/movies/:Idmovie', (req, res, next) => {
  
  Movie.findOne({'_id': req.params.Idmovie})
  .then(Movie => {
  console.log('Retrieved movie from DB:', Movie);
  res.render('movieDetails', { movie: Movie });

  })
  .catch(error => {
  console.log('Error while getting the books from the DB: ', error);
  })

});

module.exports = router;
