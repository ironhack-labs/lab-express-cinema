const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie_model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    //console.log(req)
    console.log(Movie);
    // get all the movies from the database
    Movie.find().then(moviesFromDatabase => {
      // render a 'movies' view with the movies data
      console.log(moviesFromDatabase);
      res.render('movies', { movies: moviesFromDatabase });
    }).catch(err => {
      console.log(err);
    })
  });
  
  router.get('/movies/:movie_id', (req, res) => {
    //console.log(req)
    console.log(Movie);
    const movie = req.params.movie_id
    console.log(movie)
    // get all the movies from the database
    Movie.findById(movie).then(movie => {
      res.render('movie', { 'movie': movie });
    }).catch(err => {
      console.log(err);
    })
  });
module.exports = router;
