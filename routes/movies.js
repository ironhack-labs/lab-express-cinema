const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

router.get('/', (req, res) => {
    Movie.find()
        .then(allMovies => res.render('movies', { allMovies }))
        .catch(err => console.log("Error en la BBDD", err))
})

module.exports = router;