const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

router.get('/', (req, res) => {
  Movie.find()
    .then(allMovies => res.render('movies/movies-list', { movies: allMovies }))
    .catch(err => console.log("Error consultadno las películas en la BBDD: ", err))
})

// router.get('/details/:theBookIdFromTheURL', (req, res) => {

//   const bookId = req.params.theBookIdFromTheURL

//   Book.findById(bookId)
//     .then(theBook => res.render('books/book-details', theBook))
//     .catch(err => console.log("Error consultadno el libro en la BBDD: ", err))
// })

module.exports = router