const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

router.get('/', (req, res) => {
    Movie.find()
        .then(movies => res.render('movies', {
            movies
        }))
        .catch(err => console.log('ERROR:', err))
})
router.get('/details/:movie_id', (req, res) => {
    const id = req.params.movie_id
    Movie.findById(id)
        .then(moviesDetails => res.render('movies-details', moviesDetails))
        .catch(err => console.log('ERROR', err))
})
module.exports = router