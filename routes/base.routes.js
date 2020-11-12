const express = require('express')
const router = express.Router()
const Movies = require('./../models/Movie.model')
// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/movies', (req, res) => {
    
    Movies
        .find()
        .then(movies => {
    
            res.render('movies', {movies})
        })
    
})


router.get('/movies/:movieID', (req, res) => {
    const movieid = req.params.movieID

    Movies
        .findById(movieid)
        .then(data => {
            console.log('The received data from the API: ', data);
            res.render('singlemovie', data)
        })
        .catch(err => console.log('The error while searching artists occurred: ', err));
})


module.exports = router
