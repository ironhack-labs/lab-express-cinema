const express = require('express');
const router = express.Router();
const Movie = require("../Models/Movie.model")

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    
    Movie
    .find()
    .then(movies => res.render('movies/movies', { movies }))
    .catch(err => console.log('ERROR', err))
    
})

module.exports = router;
