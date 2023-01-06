const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model.js');

router.get('/movies', (req,res) => {
    Movie.find()
    .then(allTheMovies => {
        console.log(allTheMovies)
    })
    .catch(error => console.log(`This is your error: ${error}`))
    
})


module.exports = router





