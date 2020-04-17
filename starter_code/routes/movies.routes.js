const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie')

router.get('/movies', (req, res, next) => {

    Movie.find()
        .then(allMovies => res.render('movies', { allMovies }))
        .catch(err => console.log("Ha habido un error!", err))
})


module.exports = router