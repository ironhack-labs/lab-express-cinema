const Movie = require('../models/Movie.model')

const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {

    Movie.find()
    .then((moviesFromDB) => {

        if (req.query.created) {
            res.render('movies', {movies: moviesFromDB, createdSuccess: req.query.created});
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


module.exports = router;
