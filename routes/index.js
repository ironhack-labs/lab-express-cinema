const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .then(movies => res.render('movies-page', { movies }))
        .catch(err => cosole.log(err))
})

router.get('/movies/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => res.render('movi-page', { movie }))
        .catch(err => console.log(err))
})











module.exports = router;




