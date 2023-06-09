const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')


// list all movies registered
// Read /movies
router.get("/", (req, res, next) => {
  Movie
    .find()
    .then(movies => {
      console.log('movies: ', movies.length)
      res.render("movie/movies", { movies })
    })
    .catch(err => console.log('error getting movies to /movies: ', err))
})

router.get('/movie/:id', (req, res, next) => { 
  const { id: movieId } = req.params
  console.log(movieId)
  Movie
    .findById(movieId)
    .then(movie => {
      console.log(movie)
      res.render('movie/movie-details', { movie })
    })
  .catch(err => console.log('error getting movie: ', movieId))
})

module.exports = router