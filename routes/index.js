const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            //console.log(movies)
            res.render('movies', {movies})
        })
        .catch(e => next(e))
})

/* GET movies details page */
router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movie) => {
            res.render('movie',  movie )
        })
        .catch((e) => next(e))
})

module.exports = router;
