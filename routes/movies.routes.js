const express = require('express')

const router = express.Router()


const Movie = require('./../models/Movie.model')

// Endpoints
router.get('/', (req, res) => {

    Movie
        .find()
        .then(response => {
            res.render('movies', { response })
        })
        .catch(err => console.log(err))
})

router.get('/details/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(response => {
            res.render('movie-details', response)
        })
        .catch(err => console.log(err))
})



module.exports = router