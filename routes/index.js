const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index', {
    title: "Cinema Ironhack",
    labelbtn: 'Check the movies'
}));

router.get('/movies', async (req, res, next) => {

    try {
        const moviesDb = await Movie.find({});
        console.log('-----', moviesDb);


        res.render('movies.hbs', {
            movies: moviesDb,
            title: "Cinema Ironhack",
            subtitle: "Click on the movie to check the showtime",
        });
    } catch (errDb) {
        console.log(errDb);
        next(errDb);
    }

});

router.get('/movies/:id', async (req, res, next) => {

    try {
        const movieId = req.params.id;
        console.log(movieId);
        const movie = await Movie.findById(movieId);
        console.log(movie);

        res.render("single_movie", {
            movie: movie,
        });
    } catch (errDb) {
        next(errDb);
    }
});

module.exports = router;