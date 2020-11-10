const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;


router.get('/movies', (req, res) => {
    let movieAll = Movie.find()
        .then((movieAll) => {
        res.render('movies', {movies: movieAll})
    })

});


router.get('/movies/:id', (req, res) => {
    let movieId = req.params.id;
    //get book using id that is on the route
    //find book on MongoDB using the book id
    Movie.findById(movieId)
      .then((theMovieFound) => {
        res.render('movies-details', {movies: theMovieFound});
      })
      .catch((err) => {
        res.render('error', {err})
          })
  }); 
  
  