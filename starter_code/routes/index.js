const express = require('express');
const router  = express.Router();

//Import the Movies model
const Movie   = require('../models/movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//Iteration#3 - List the Movies
router.get('/movies', (req, res, next) =>{
  Movie.find()
    .then(movies => {
      console.log('The movies in the DB are the following: ', movies)
      res.render('movies', {allMovies: movies})
    })
    .catch(error => {
      console.log('Error while listing the movies: ', error)
    })
})

//Route by ID
router.get('/movies/:id', (req, res, next) => {
  console.log('The id selected is: ', req.params.id)
  let movieId = req.params.id;
  // if (!/^[0-9a-fA-F]{24}$/.test(movieId)) { 
  //   return res.status(404).render('not-found');
  // }
  Movie.findOne({'_id': movieId})
    .then(movie => {
      // if (!movie) {
      //     return res.status(404).render('not-found');
      // }
      res.render("movie-detail", { movie })

    })
    .catch(error =>{
      console.log('Error while seearching for one movie: ', error)
    })
});


module.exports = router;
