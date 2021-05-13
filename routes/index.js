const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allMoviesFromDB => {
      //console.log(allMoviesFromDB)
      res.render('movies', { movies: allMoviesFromDB }); 
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
      next(error);
    });
});

router.get('/movies/:movieId', (req, res)=>{
  const { movieId } = req.params;
  console.log('The ID from the URL is: ', movieId);
  Movie.findById(movieId)
    .then(theMovie => res.render('movie-details', { movie: theMovie }))
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
      next(error);
    });
})
module.exports = router;
