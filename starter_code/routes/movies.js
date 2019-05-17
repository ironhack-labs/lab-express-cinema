const express = require('express')
const router = express.Router()

const Movie = require('../models/movies')






//  router.get('/', (req, res, next) => res.render('movies-index'))

router.get('/', (req, res, next) => {                             // ESTO ES EL CONTROLADOR
  Movie.find()                                                         // ESTO ES EL MODELO
    .then(allMovies => res.render('movies', { movies: allMovies }))  // ESTO ES LA VISTA
    .catch(error => console.log(error))
})

router.get('/:_id', (req, res, next) => {                             // ESTO ES EL CONTROLADOR
  const id = req.params._id
  console.log("cacacacacacaca")
  Movie.findById(id)                                                         // ESTO ES EL MODELO
  .then(info =>{
       res.render('movie-detail', { movies: info })})  // ESTO ES LA VISTA
    .catch(error => console.log(error))
})



// router.get('/view/:book_id', (req, res) => {

//   //const id = req.params.book_id
//   Book.findById(req.params.book_id)
//     .then(theBook => res.render('book-detail', { book: theBook }))
//     .catch(error => console.log(error))
// })




module.exports = router