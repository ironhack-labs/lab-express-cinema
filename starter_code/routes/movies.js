const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')


// Movie list
router.get('/', (req, res, next) => {                             // ESTO ES EL CONTROLADOR
  Movie.find()                                                         // ESTO ES EL MODELO
    .then(allMovies => res.render('movies', { movies: allMovies }))
    .catch(error => console.log(error))
})

// Description movie
router.get('/:movie_id', (req, res, next) => {
  Movie.findById(req.params.movie_id)
    .then(theMovie => {
      res.render('movies-detail', { movie: theMovie })
    })
    .catch(error => console.log(error))
})


















/*
router.get('/movies/:book_id', (req, res) => {

  //const id = req.params.book_id
  Book.findById(req.params.book_id)
    .then(theBook => res.render('book-detail', { book: theBook }))
    .catch(error => console.log(error))
})
*/



module.exports = router