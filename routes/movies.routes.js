const express = require('express')
const router = express.Router()

const movie = require('./../models/movie.model')


router.get('/', (req, res) => {

    movie
        .find()
        .then(allMovies => res.render('movies/movies-list', { allMovies }))  
        .catch(err => console.log(err))
})


router.get('/detalle/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    movie
        .findById(movieId)
        .then(theMovie => res.render('movies/movie-detail', theMovie))
        .catch(err => console.log(err))
})



module.exports = router
