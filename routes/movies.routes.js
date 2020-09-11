const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

router.get('/list', (req, res) => {

    Movie.find()
        .then(movies => res.render('movies-list', { movies }))
        .catch(err => console.log('ERROR', err))
})

router.get('/details/:id', (req, res) => {

    const id = req.params.id

    Movie.findById(id)
        .then(movieDetails => res.render('movie-details', movieDetails))
        .catch(err => console.log("ERRORR", err))
})

module.exports = router