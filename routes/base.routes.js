const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model');

// Home page
router.get('/', (req, res) => res.render('index'))

// Movies list
router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(allMovies => {
            console.log('Las películas son: ', allMovies.title)
            res.render('movies', { allMovies })
        })
        .catch(err => console.log(err))
})

module.exports = router;
