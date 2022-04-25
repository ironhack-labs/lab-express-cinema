const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res, next) => {
    Movie.find()
        .then((moviesFromDB) => {
            console.log(`Reading the movies:`, moviesFromDB);
            res.render('movies', {
                movies: moviesFromDB
            })
        })
        .catch(err => console.log("there was an error", err))

})

// iteration 4 done by Pedro


//create functionality

router.get("/movies/create", (req, res, next) => {
    res.render("movie-create");
})

router.post("/movies/create", (req, res, next) => {
    const newMovie = {
        title: req.body.title,
        director: req.body.director,
        stars: req.body.stars,
        image: req.body.image,
        description: req.body.description,
        showtimes: req.body.showtimes

    }

    Movie.create(newMovie)
        .then(createMovie => {
            res.redirect("/movies");
        })
        .catch(err => {
            console.log("Error creating a new movie", err);
            next(err);
        })
    })

    module.exports = router
