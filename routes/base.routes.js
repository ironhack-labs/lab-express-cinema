const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model');

// Endpoints
router.get('/', (req, res) => res.render('index'))


router.get('/', (req, res) => {
    Movie
        .find()
        .then(allMovies => res.render('movies', { allMovies: allMovies }))
        .catch((error) => console.log(`It's not getting the movies: ${error}`))
})

// detalle
router.get('/detalle/:movie_id', (req, res) => {
    Movie
        .findById(req.params.movie_id)
        .then(theMovie => res.render('details', theMovie))
        .catch(err => console.log(err))
    // res.send('fkdhsfkjhjdfhjsdhf' + req.params.id);

})
module.exports = router
