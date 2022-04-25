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
router.get('/movie/:movieId', (req, res, next) => {
    const { movieId } = req.params
    Movie.findById(movieId)
        .then(movieDetails => {
            console.log(movieDetails);
            res.render('movie-details.hbs', { movie: movieDetails });
        })
        .catch(error => {
            console.log('Error getting movie from DB: ', error);
            next(error);
        });
});
//create functionality

    module.exports = router
