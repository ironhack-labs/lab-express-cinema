const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Ruta de Movies
router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then ((moviesArray) => {
      console.log("Lista de pelis OK");
      res.render('movies', {moviesArray});
    })
});

// Ruta de Movies
router.get('/movie/:id', (req, res, next) => {
  let movieID=req.params.id;
  console.log(movieID);
  Movie.findById(movieID)
  .then ((movie) => {
    console.log(`Lista peli ${movie.title}`);  
    res.render('movieDetails', {movie});
  })

});
module.exports = router;
