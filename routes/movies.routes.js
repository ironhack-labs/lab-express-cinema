const express = require('express')
const router = express.Router()


const Movie = require('../models/movie.model')

// Endpoints
router.get('/', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('movies', {allMovies}))
        .catch(err => console.log(err))

})

module.exports = router
