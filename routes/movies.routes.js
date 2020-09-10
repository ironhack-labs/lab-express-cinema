const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model.js')

router.get('/list', (req, res) => {

    //console.log('Siiiiii');

    Movie.find()
        .then(movies => res.render('movies-list', { movies }))
        .catch(err => console.log('ERROR', err))
})

router.get('/details/movies/:id', (req, res) => {

    const id = req.params.movie_id

    Movie.findById(id)
        .then(movieDetails => res.render('movie-details', movieDetails))
        .catch(err => console.log("ERRORR", err))
})

module.exports = router