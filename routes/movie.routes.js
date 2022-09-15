const express = require('express');
const router = express.Router();

// require Movie model 
const Movie = require('../models/Movie.model')

// GET route to display Movies 
router.get('/movies', (request, response, next) => {
    
    Movie.find()
    .then( (allMoviesFromDB) => {
        console.log('Retrieved all movies from DB: ', allMoviesFromDB);
    
         response.render('movies/movies.hbs', {movies: allMoviesFromDB});
    })
    .catch( (error) => {
        console.log('Error while getting the movies from the DB', error);
        next(error);
    });
});

// create route to display the details about each movie

router.get('/movies/:id', (request, response, next) => {
   
    const movieId = request.params.id;
    console.log('ID from URL is: ', movieId);
    
    Movie.findById(movieId)
    .then( (theMovie) =>{
        response.render('movies/movie-details.hbs', {movie: theMovie})
    })
    .catch( (error) => {
        console.log('Error while retrieving the movie details', error);
        next(error);
    });
})



module.exports = router;