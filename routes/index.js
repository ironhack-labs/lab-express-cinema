const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// route for display all movies
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then( moviesArr => {
            console.log(moviesArr);
            res.render('movies', {movies: moviesArr})
        })
        .catch(err => {
            console.log("error displaying movies", err);
        }) 
});

// CREATE: display a form to add movies
router.get("/movies/create", (req, res, next) => {
    res.render("movie-create");
})

// CREATE: process form
router.post("/movies/create", (req, res, next) => {

    const newMovie = {
        title: req.body.title,
        director: req.body.director,
    }

    Movie.create(newMovie)
        .then((movieFromDB) => {
            res.redirect("/movies");
        })
        .catch(err => {
            console.log("error creating movie on DB", err)
            next(err);
        });

})

// READ: display movie details
router.get("/movies/:movieId", (req, res, next) => {
    const id = req.params.movieId;

    Movie.findById(id)
        .then((movieDetails) => {
            console.log(movieDetails);
            res.render("movie-details", movieDetails);
        })
        .catch(err => {
            console.log("error getting movie details from DB", err)
            next(err);
        });
})


// UPDATE: display form
router.get("/movies/:movieId/edit", (req, res, next) => {
    const id = req.params.movieId;
    Movie.findById(id)
        .then((movieDetails) => {
            res.render("movie-edit", movieDetails);
        })
        .catch(err => {
            console.log("error getting movie details from DB", err)
            next(err);
        });
});

module.exports = router;

// UPDATE: process form
router.post("/movies/:movieId/edit", (req, res, next) => {

    const id = req.params.movieId;

    const newDetails = {
        title: req.body.title,
        director: req.body.director,
    };

    Movie.findByIdAndUpdate(id, newDetails)
        .then((movieFromDB) => {
            res.redirect(`/movies/${movieFromDB._id}`);
        })
        .catch(err => {
            console.log("error updating movie in DB", err)
            next(err);
        });
});