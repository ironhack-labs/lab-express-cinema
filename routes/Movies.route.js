const router = require('express').Router();

// const { update } = require('../models/Movie.model.js');
const Movie = require('../models/Movie.model.js');

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(allMoviesFromDB => {
        console.log('All the movies from DB:', allMoviesFromDB);
        res.render('movies', { movies: allMoviesFromDB });
    })
    .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);

        next(error);
    })
});

router.get('/movies/:id', (req, res, next) => {
    const movieId = req.params.id;
    console.log(movieId)
    Movie.findById(movieId)
    .then(theMovie => {
        console.log(theMovie)
        res.render('movie-details', { movie: theMovie })
    })
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
    
      // Call the error-middleware to display the error page to the user
      next(error);
    })
});





module.exports = router