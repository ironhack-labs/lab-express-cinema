const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')


router.get('/', (req, res) => {

    Movie.find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log('ERROR:', err))

})


router.get('/:movie_id', (req, res) => {

    const id = req.params.movie_id

    Movie.findById(id)
        .then(movie => res.render('movie-details', movie)) // findById return an object
        .catch(err => console.log('ERROR:', err))

})

module.exports = router
