const express = require('express')
const router = express.Router()
const Movie = require('./../models/Movie.model')

router.get('/', (req, res) => { 
    const movieId = req.params.movieId
    
// res.render('movies/movieDetails')


Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/movieDetails', { movie: theMovie }))
        .catch(err => console.log(err))
})

module.exports = router;