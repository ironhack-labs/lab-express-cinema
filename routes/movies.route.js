const router = require('express').Router();

const Movie = require('../models/Movie.model.js');

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(theMovies => {
        res.render('movies.hbs', {moviesDB: theMovies} );
    })
    .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
        next(error);
      });
})

router.get('/movie/:id', (req, res, next) => {
    let movieID = req.params.id;
    console.log(movieID);
    Movie.findById(movieID)
    .then(theMovie => {
        console.log('Retrieved movie from DB:', theMovie);
        res.render('movieDetails.hbs', theMovie );
    })
    .catch(error => {
        console.log('Error while getting the movie from the DB: ', error);
        next(error);
      });
})

module.exports = router;