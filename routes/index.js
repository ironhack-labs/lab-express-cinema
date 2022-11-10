const express = require('express');
const router = express.Router();
const Movie = require('./../models/movie.model')

/* GET home page */
router.get('/', (req, res) => res.render('index'))

router.get('/movies', (req, res) => {
    Movie
        .find()

        .then(moviesFromDB => {
            res.render('movies', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))
})

router.get('/movies/details/:movies_id', (req, res) => {

    const { movies_id } = req.params

    Movie
        .findById(movies_id)
        .then(moviesFromDB => {
            res.render('movies/details', moviesFromDB)
        })
        .catch(err => console.log(err))

})

module.exports = router;
