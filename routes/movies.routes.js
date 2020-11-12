const express = require('express')
const { render } = require('../app')
const router = express.Router()

const Movie = require('./../models/movie.model')

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('movies', { allMovies })) 
        .catch(err => console.log(err))
})

module.exports = router 