const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

Movie.find()
    .then(movi => console.log(movi))


router.get('/', (req, res) => {

    Movie.find()
        .then(movies => res.render('movies-list',  {movies}))
        .catch(err => console.log('ERROR:', err))
})

router.get('/detalles/:movies_id', (req, res) => {

    const id = req.params.movie_id

    Movie.findById(id)
        .then(theFullBookDetails => res.render('movie-details', {theFullBookDetails}))
        .catch(err => console.log("ERRORR", err))
})

module.exports = router