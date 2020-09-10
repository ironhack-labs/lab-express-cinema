const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

// Endpoints
router.get('/', (req, res) => {
    
    Movie.find()
        .then(movies => res.render('movies', { movies })) // Find return an array, and I need an object
        .catch(err => console.log('ERROR:', err))
    
})


router.get('/:movie_id', (req, res) => {

    const id = req.params.movie_id

    Movie.findById(id)
        .then(movie => res.render('movie-details', movie)) // findById return an object
        .catch(err => console.log('ERROR:', err))

})

module.exports = router
