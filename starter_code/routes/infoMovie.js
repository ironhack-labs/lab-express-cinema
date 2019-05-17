const express = require('express')
const router = express.Router()



const Film = require('../models/film')

router.get('/', (req, res, next) => {

                              // ESTO ES EL CONTROLADOR
    Film.find()                                                         // ESTO ES EL MODELO
    .then(allMovies => res.render('movies', {movies: allMovies }))  // ESTO ES LA VISTA
    .catch(error => console.log(error))

    
})

router.get('/:_id', (req, res, next) => {
const infoMovieById = req.params._id
    // ESTO ES EL CONTROLADOR
Film.findById(infoMovieById)                                                         // ESTO ES EL MODELO
.then(info => res.render('infoMovie', {movies: info }))  // ESTO ES LA VISTA
.catch(error => console.log(error))


})

module.exports = router