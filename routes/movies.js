const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model.js')

router.get('/movies', (req, res, next) => {
    console.log('MOVIES ROUTE')

    Movie.find()
        .then((data) => {
            console.log('loaded movies from db')

            res.render('movies', {
                movies: data
            })
        })
        .catch(err => console.log('Failed to load movies', err))
})

module.exports = router