const express = require('express')
const router = express.Router()
const Movies = require('../models/Movie.model')


// Endpoints
router.get('/', (req, res) => res.render('index'))

router.get('/movies', (req, res) => {

    Movies.find()
        .then(movies => res.render('movies', {movies}))
        .catch(err => console.log("Err: ", err))
})

router.get('/movie/:id', (req, res) => {

    const id = req.params.id
    console.log("Ejemplo: ", id)
    Movies.findById(id)
        .then(moviesDetails => res.render('movie', moviesDetails))
        .catch(err => console.log("ERROR", err))
})

module.exports = router
