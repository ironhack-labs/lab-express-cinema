// routes/movie.routes.js

const router = require('express').Router();
const Movie = require('../models/Movie.model.js'); // <== add this line before your routes

// GET route to retrieve and display all the movies
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allTheMoviesFromDB => {
            console.log('Retrieved movies from DB:', allTheMoviesFromDB);
            // we call the render method after we obtain the books data from the database -> allTheMoviesFromDB
            res.render('movies.hbs', { movies: allTheMoviesFromDB }); // pass `allTheMoviesFromDB` to the view (as a variable movies to be used in the HBS)
        })
        .catch(error => {
            console.log('Error while getting the movies from the DB:', error);
            next(error);
        });
});

router.get('/movie/:id', (req, res, next) => {
    const movie_id = req.params.id;
    Movie.findById(movie_id)
        .then(movie_details => {
            const formattedShowtimes = movie_details.showtimes.join(" | ");

            console.log(console.log('Retrieved movie:', movie_details));

            res.render('movie_detail.hbs', { movie: movie_details, formattedShowtimes: formattedShowtimes })
        })
})

module.exports = router;
