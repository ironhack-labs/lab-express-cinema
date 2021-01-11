const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/movies', (req, res, next) => 
{
    Movie.find()
    .then(movies => {
        console.log(movies)
        res.render('movies', {movies});
})
    .catch(err => console.log (`Not working, check the code!:`, err))
});

    router.get('/movies/:movieId', (req, res, next) => {
        const { movieId } = req.params;
        console.log('the ID from the URL is: ', movieId);
        Movie.findById(movieId)
        .then(theMovie => res.render('movieDetails', { movie: theMovie }))
        .catch(err => console.log('Error while retrieving movie details: ', err));
    });


module.exports = router;