const express = require('express')
const router = express.Router()

const Film = require('../models/Movie')



router.get('/', (req, res, next) => {
  Film.find({})

    .then(allTheFilms => res.render('movies', { movies: allTheFilms }))  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})

//router.get('/detail/:id', (req, res, next) => {
//  const filmId = req.params.id
//  Film.findById(filmId)
//    .then(theWholeBook => res.render('book-detail', { book: theWholeBook }))
//    .catch(err => console.log('Hubo un error:', err))
//})

module.exports = router