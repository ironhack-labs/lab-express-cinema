const express = require('express');
const router = express.Router();
const Movie = require("./../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// Movies list
router.get('/movies', (req, res) => {
    Movie
        .find()
        .select()
        .then(moviesFromDB => {
            console.log(moviesFromDB)
            res.render('movies', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))
})


// Movie details
router.get('/movie/:moviesId', (req, res) => {
    const { moviesId } = req.params
    Movie
        .findById(moviesId)
        .then(moviesFromDB => {
            res.render('details', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))

})

module.exports = router;
