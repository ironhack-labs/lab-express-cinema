const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

router.get('/list', (req, res, next) => {
  Movie.find({})
    .then(allTheMovies => res.render('movies-list', { books: allTheMovies }))  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/detail/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .then(theWholeMovie => res.render('movie-detail', { movie: theWholeMovie }))
    .catch(err => console.log('Hubo un error:', err))
})

module.exports = router