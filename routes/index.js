const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')
require('../db/index')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .sort({ title: 1 })
        .then((movies) => res.render('movies', { movies }))
        .catch(err => console.log(err))

})

router.get('/movie-detail/:movies_id', (req, res) => {
    const { movies_id } = req.params
    Movie
        .findById(movies_id)
        .then((movies) => { res.render('movie-detail', movies) })
        .catch(err => console.log(err))

})

module.exports = router;
