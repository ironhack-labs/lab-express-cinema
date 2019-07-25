  
const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')



router.get('/', (req, res, next) => {
  Movie.find({})
    .then(allTheMovies => res.render('movies', { movies: allTheMovies })) 
    .catch(err => console.log('Hubo un error:', err))
})

// router.get('/detail/:id', (req, res, next) => {
//   const bookId = req.params.id
//   Book.findById(bookId)
//     .then(theWholeBook => res.render('book-detail', { book: theWholeBook }))
//     .catch(err => console.log('Hubo un error:', err))
// })

module.exports = router