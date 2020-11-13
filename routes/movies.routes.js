const express = require('express')
const router = express.Router()
const Movie = require('./../models/Movie.model')
// Endpoints
router.get('/', (req, res) => {
    Movie
        .find()
        .then(allTheMovies => {
            console.log(allTheMovies)
            res.render('movies/movies-list', { allTheMovies })
        })
        .catch(err => console.log('ERROR:', err))

})

router.get('/:movie_id', (req, res) => {
    Movie
        .findById(req.params.movie_id)
        .then(movie => {
            console.log(movie)
            res.render('movies/movie-details', movie)
        })
        .catch(err => console.log('ERROR:', err))
})


module.exports = router
