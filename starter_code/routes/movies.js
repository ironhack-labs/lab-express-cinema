const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

console.log("BEYONCE.....................")

router.get('/movies', (req, res) => {
    // get all the movies
    Movie.find().then(movies => {
        console.log("What is movies....:", movies)
        // render a 'movies' view with the movies data
        res.render('movies', { moviesList: movies });
        console.log("What is moviesList....:", { moviesList: movies })
    })
});

module.exports = router