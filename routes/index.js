const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {

    Movie.find()
        .then(ExtractedMovies => {
            console.log(ExtractedMovies)
            res.render('movies', { movies: ExtractedMovies})
             })
        .catch(err => console.log(err))
        })

router.get('/movie-details/:movieId', (req, res) => {
    
    const { movieId } = req.params

    Movie.findOne({_id: movieId}) 
        .then(foundMovie => { 
            console.log(foundMovie)
            res.render('movie-details', { movieDetail: foundMovie })})

        .catch((err) => console.log(err))
        
})



module.exports = router;
