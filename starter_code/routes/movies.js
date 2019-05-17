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


router.get('/:_id', (req, res) => {


  Movie.findById(req.params._id)
    .then(theMovie => res.render('movie-detail', { movies: theMovie }))
    .catch(error => console.log(error))
})




module.exports = router





