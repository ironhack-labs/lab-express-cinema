const express = require('express');
const router = express.Router();

const movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get('/movies', (req, res) => {
    movie
        .find()
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get('/movies/:movieID', (req, res) => {
    const { movieID } = req.params
    movie
        .find({ _id: movieID })
        .then(movie => {
            res.render('movie-details', { movie })
            // console.log(movie)
        })
})

router.get('/movies/:movieID/reserve', (req, res) => {
    const { movieID } = req.params
    res.render('reserve')
})

module.exports = router;
