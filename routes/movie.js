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

module.exports = router