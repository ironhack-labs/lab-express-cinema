const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

router.get('/movies', (req, res) => {
    Movie.find()    
    .then(availableMovies => {
        console.log(availableMovies)
        res.render('movies', { movieAlt: availableMovies })
    })
    .catch(err => console.log(`Err while displaying movies page: ${err}`));
});

module.exports = router;    

router.get('/movies/:id/description', (req, res) => {
    Movie.findById(req.params.id)
    .then(foundMovie => {
        res.render('descriptionMovie', {movie: foundMovie})
    })
    .catch(err => console.log(`Err while getting the movie from the  DB: ${err}`));
})