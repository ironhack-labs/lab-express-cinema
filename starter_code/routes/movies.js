const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie')




router.get('/', (req, res, next) => {                             // ESTO ES EL CONTROLADOR
  Movie.find()
    .then(allmovies => {
      res.render('movies-list', { movies: allmovies })  // ESTO ES LA VISTA
      console.log(allmovies)
    })                                               // ESTO ES EL MODELO
    .catch(error => console.log(error))
})





/* router.get('/view/:book_id', (req, res) => {

  //const id = req.params.book_id
  Book.findById(req.params.book_id)
    .then(theBook => res.render('book-detail', { book: theBook }))
    .catch(error => console.log(error))
}) */




module.exports = router





