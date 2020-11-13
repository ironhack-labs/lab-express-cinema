const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

// Endpoints
router.get('/', (req, res) => res.render('index'))


router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(allMovies => {
            console.log('Movie added:', allMovies.name)
            res.render('movies', {
                allMovies
            })
        })
        .catch(err => console.log('The error while finding movies is:', err))
})


router.use('/movies/:id', (req, res) => {


    Movie
        .findByID(req.params.movie_id)
        .then(movie_id => {
            console.log('Movie added:', movie_id)
            res.render('movies', {
                movie_id
            })
        })
        .catch(err => console.log('The error while finding movies ID is:', err))
})

module.exports = router