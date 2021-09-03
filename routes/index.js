const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    
    Movie
    .find()
    .then(movies => res.render('movies', { movies }))
    .catch(err => console.log(err))
}) 

router.get('/movies/movie-ditail/:movie_id', (req, res) => {

    const {movie_id} = req.params
  
    Movie
      .findById(movie_id)
      .then(theMovie => res.render('movie-ditail', theMovie))
      .catch(err => console.log(err))
  })

module.exports = router;
