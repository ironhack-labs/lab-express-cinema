const router = require('express').Router();

const Movie = require('../models/Movie.model.js');


router.get('/movies', async (req, res) => {

    try {
        const movies = await Movie.find();
        res.render("movies/movies.hbs", { movies });
    } catch (e) {
        console.log("An error ocurred when gettting all movies", e);
    }

});

router.get('/movies/:movieId', async (req, res) => {
    const { movieId } = req.params;

    try {
        const movie = await Movie.findById(movieId);
        res.render('movies/movie-details.hbs', movie);
    } catch (e) {
        console.log("An erro ocurred while show the movie details", e);
    }


});


module.exports = router;