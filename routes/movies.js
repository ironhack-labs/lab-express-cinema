const router = require('express').Router();

const Movie = require('../models/Movie.model.js'); 

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allTheMoviesFromDB => {

            res.render('movies.hbs', { movies: allTheMoviesFromDB });
        })
        .catch(error => {
            console.log('Error while getting the movies from the DB: ', error);

            next(error);
        });
});

router.get('/movies/:id', (req, res, next) => {

    const { id } = req.params;

    console.log('The ID from the URL is: ', id);

    Movie.findById(id).then(movie => {
        res.render('movie-details.hbs', { movie: movie });
    }).catch(error => {
        console.log('Error while retrieving movie details: ', error);
        next(error);
    });

})

module.exports = router;
