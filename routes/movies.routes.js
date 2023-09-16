const router = require('express').Router();

const Movie = require('../models/Movie.model');

//GET route to retrieve and display all the movies
router.get('/movies', (req, res, next) => 
{
    Movie.find()
        .then(allMoviesFromDB => {
            console.log(allMoviesFromDB)
            res.render('movies.hbs', {allMoviesFromDB})
        })
        .catch(err => {
            console.log('Error retrieving data from DB: ', err)
            next(err)
        })
})

//GET route to retrieve and display movie details for each movie with req.params
router.get('/movies/:movieId', (req, res, next) => 
{
    const { movieId } = req.params;
    Movie.findById(movieId)
        .then(moviesInfo => {
            res.render('movies-info.hbs', moviesInfo)
        })
        .catch(err => {
            console.log(`Error retrieving movie details: ${err}`)
            next(err)
        })
})

module.exports = router;