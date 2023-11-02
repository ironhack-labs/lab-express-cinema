const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.model')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies: movies })
        })
        .catch(err => console.log(err))
})

router.get('/moviedetails/:id', (req, res) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(movie => {
            res.render('movie', movie)
        })
        .catch(err => console.log(err))
})

module.exports = router;
