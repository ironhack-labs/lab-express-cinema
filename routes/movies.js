const Movie = require('../models/Movie.model')

const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    Movie.find()
    .then((moviesFromDB) => {
        if (req.query) {
            res.render('movies', {movies: moviesFromDB, priorAction: req.query});
        } else {
            res.render('movies', {movies: moviesFromDB});
        };
    })
    .catch((err) => {
        console.log('Error getting movies from DB: ', err);
    });

});

router.get('/create', (req, res) => {
    res.render("movie-create");
});

router.get('/:movieId', (req, res, next) => {
    Movie.findById(req.params.movieId)
    .then((oneMovie) => {
        res.render("movie-details", {movie: oneMovie});
    })
    .catch((err) => {
        console.log("Error getting movie details from DB: ", err);
    });
})


router.post('/create', (req, res) => {    
    let {title, director, stars, showtimes, image} = req.body;
    stars = stars.split(",");

    Movie.create({title, director, stars, showtimes, image})
    .then(() => {
        res.redirect("/movies?created=true");
    })
    .catch((err) => {
        console.log('Something went wrong creating new Movie: ', err);
    });
});

router.get('/:movieId/delete', (req, res) => {
    Movie.findByIdAndDelete(req.params.movieId)
    .then(() => {
        res.redirect("/movies/?deleted=true");
    })
    .catch((err) => {
        console.log("Error deleting movie from DB: ", err);
    });
});

router.get('/:movieId/edit', (req, res) => {
    Movie.findById(req.params.movieId)
    .then((theMovie) => {
        res.render("movie-create.hbs", {movie: theMovie});
    })
    .catch((err) => {
        console.log("Error getting movie from DB: ", err);
    });
});

router.post('/:movieId/edit', (req, res) => {
    let {title, director, image, stars} = req.body;
    stars = stars.split(",");
    Movie.findByIdAndUpdate(req.params.movieId, {title, director, image, stars})
    .then(() => {
        res.redirect("/movies/?updated=true");
    })
    .catch((err) => {
        console.log("Error updating movie in DB: ", err);
    });
});

module.exports = router;
