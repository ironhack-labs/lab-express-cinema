const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

router.get('/', (req, res) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))

})

router.get('/details/:_id', (req, res) => {

    const _id = req.params

    Movie
        .findById(req.params._id)
        .then(moviesDetails => res.render('details', moviesDetails))
        .catch(err => console.log(err))

})

module.exports = router;

