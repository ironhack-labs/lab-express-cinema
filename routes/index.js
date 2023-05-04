const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(allMovies => {
            res.render('movies', { movies: allMovies })
        })
        .catch(err => console.log(err))

})

router.get('/movieDetails/:id', (req, res) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(moviedata => {
            res.render('movie', moviedata)
        })
})

module.exports = router;
