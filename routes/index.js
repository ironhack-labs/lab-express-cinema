const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


//BUSCAR TODAS LAS PELÍCULAS
router.get('/movies', (req, res) => {
  Movie.find()
      .then(moviesFromDb => {
          console.log('movies:', moviesFromDb)
          res.render('movies',{ movies: moviesFromDb})
      })
      .catch(e => {
          console.log('Error while getting the books from DB',e)
          next(e)
      })
})

//BUSCAR POR ID 
router.get('/movies/:movieId', (req,res) => {
  const {movieId} = req.params;
  Movie.findById(movieId)
    .then(theMovie => res.render('movie-details', {movie: theMovie}))
    .catch(e => {
      
      console.log('Error while retrieving movie details: ',e)
      next(e)
    })

})


module.exports = router;
