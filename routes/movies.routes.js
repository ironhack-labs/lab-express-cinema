const router = require('express').Router();
const Movie = require('../models/Movie.model');

//Everytime we call the server with /movies
router.get('/movies', (req, res, next)=>{
    Movie.find()
        .then(allTheMoviesFromDB => {
            console.log('Movies from the DB:', allTheMoviesFromDB);
            res.render('../views/movies.hbs', {movies: allTheMoviesFromDB})
        })
        .catch(error => {
            console.log('Error while getting the movies from the DB: ', error);
       
            // Call the error-middleware to display the error page to the user
            next(error);
          });
});
router.get('/movies/:movieId', (req, res) =>{
    const {movieId} = req.params;

    Movie.findById(movieId)
        .then(theMovie => 
            res.render ('../views/movie-details.hbs', {movies: theMovie}))
        .catch(error =>{
            console.log('Error while retrieving movie details: ', error);
        
        next(error);
        });
});

module.exports = router;