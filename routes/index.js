const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')



/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;


// movie list

router.get("/movies", (req, res, next) => {

    Movie
        .find()
        .then(moviesFromDB => {
            console.log(moviesFromDB)
            res.render('movies', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))

    // res.render("movies");
})

// Movie details
router.get('/movieDetails/:movies_id', (req, res) => {

    const { movies_id } = req.params

    Movie
        .findById(movies_id)
        .then(moviesFromDB => {
            res.render('movieDetails', moviesFromDB)
        })
        .catch(err => console.log(err))

})



