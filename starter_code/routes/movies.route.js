const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')



router.get('/', (req, res, next) => {
  console.log
  Movie.find({})
    .then(allTheMovies => res.render('movies-list', { movies: allTheMovies })) 
    .catch(err => console.log('Hubo un error:', err))
})

// router.get('/detail/:id', (req, res, next) => {
//   const moviesId = req.params.id
//   Book.findById(moviesId)
//     .then(theWholeMovie => res.render('movie-detail', { movie: theWholeMovie }))
//     .catch(err => console.log('Hubo un error:', err))
// })

module.exports = router
