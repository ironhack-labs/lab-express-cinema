const router = require('express').Router();


const Movie = require('../models/Movie.model')

router.get('/', (req, res, next) => {
    Movie.find()
    .then((allMovies) => { 
        console.log (allMovies);
        res.render('movies', {movies: allMovies});
     })
    .catch((err) => console.log(err))
})

router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    Movie.findById(id)
    .then((TheMovie) => {
        res.render ('movie-details', {movie: TheMovie})
    })
    .catch((err) => {   
        console.log(err);
        next(err);
    })
})

module.exports = router;