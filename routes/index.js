const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movies.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .select({ title: 1, image: 1, })
        .then(moviesFromDB => {
            res.render('movies', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))
})

router.get('/movies/movies-details/:movies_id', (req, res) => {

    const { movies_id } = req.params

    Movie
        .findById(movies_id)
        .then(movieFromDB => {
            res.render('movies-details', { movies: movieFromDB })
            // res.send('estoy probando')
        })
        .catch(err => console.log(err))

})

module.exports = router;