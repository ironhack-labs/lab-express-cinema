const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

router.get('/', (req, res) => {

    Movie.find()
        .then(movies => res.render('movie-list.hbs', {movies}))
        .catch(err => console.log('ERROR:', err))
})

router.get("/details/:movies_id", (req, res) => {

    const id = req.params.movies_id

    Movie.findById(id)
        .then(movieDetails => res.render('movie-details', movieDetails))
        .catch(err => console.log('Error!', err))

})

module.exports = router