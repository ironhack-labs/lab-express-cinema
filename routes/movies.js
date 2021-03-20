const express = require('express');
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Movie.find()
    .then(movie => res.render('movies', { movie: movie }))
    .catch(error => console.log(error))

})

router.get('/add', (req, res) => res.render('add-movie'))

router.post('/add', (req, res) => {
    const newMovie = req.body;

    Movie.create(newMovie)
    .then(movie => {
        console.log(`${movie.title} successfully inserted in database.`)

        res.redirect('/movies')
    })
    .catch(error => console.log(error))
})

router.get('/:movieId', (req, res) => {
    const { movieId } = req.params;

    Movie.findById(movieId)
    .then(movie => {
        res.render('movie-details', { movie: movie })
    })
    .catch(error => console.log(error))
})



module.exports = router;