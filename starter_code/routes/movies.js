const express = require('express')
const router = express.Router()

const Movie = require('../models/movieMods')

router.get('/', (req,res,next) => {

    Movie.find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log("Ha habido un error!", err))
})

router.get('/more/:movieId', (req, res, next) => {

    Movie.findById(req.params.movieId)
        .then(movie => res.render('movieCard', movie))
        .catch(err => console.log("ha habido un error", err))
})

module.exports = router