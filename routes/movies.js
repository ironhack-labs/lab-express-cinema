const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

router.get('/', (req, res) => {
    Movie.find()
    // console.log(movies)
    .then((movies) => {
        res.render('movies', {movies})
    })
    .catch(err => console.log(err))
})

router.get('/create', (req, res) => {
    res.render('create-movie')
})

router.post('/create', (req, res) => {
    Movie.create(req.body)
    .then(()=> res.redirect('./'))
})

router.get('/delete/:id', (req, res) => {
    Movie.deleteOne({_id : req.params.id})
    .then(() => res.send('Movie deleted successfully'))
})

router.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        res.render('movie-details', movie)
    })
})

module.exports = router;