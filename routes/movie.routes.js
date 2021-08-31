const router = require("express").Router();

const Movie = require("../models/Movie.model");

// router.get('/movies', (req, res) => res.render('movies'));

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMoviesFromDB => {
            // -> allMoviesFromDB is a placeholder, it can be any word
            console.log('Retrieved movies from DB:', allMoviesFromDB);
            res.render('movies', {
                movies: allMoviesFromDB
            });
        })
        .catch(error => {
            console.log('Error while getting the movies from the DB: ', error);

            // Call the error-middleware to display the error page to the user
            next(error);
        });
});

router.get('/movies/:movieId', (req, res, next) => {

    Movie.findById(req.params.movieId)
        .then(movieFromDB => {
            console.log('a movie is:', movieFromDB);

            res.render('movie-details',
                movieFromDB
            )
        })
        .catch(Error => console.log('an error occurred while retrieving movie details from DB'))


});




module.exports = router;