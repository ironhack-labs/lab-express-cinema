const express   = require('express');
const router    = express.Router();

const Movie     = require('../models/Movie.model.js')    

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
})

router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then((allMovies) => {
            //console.log(allMovies)
            res.render('movies', {movies: allMovies})
        }).catch(error => {
            next(error)
        })
})

router.get('/movies/:id', (req, res, next) => {
    const id = req.params.id

    Movie.findById(id)
        .then((movieFound) => {
            //console.log(movieFound)
            res.render('movie-details', {movie: movieFound})
        }).catch((error) => {console.log(error)})
})



module.exports = router;
