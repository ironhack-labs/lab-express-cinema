const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

// Home page
router.get('/', (req, res, next) => res.render('index'));

// Movies page
router.get('/movies', (req, res) => {

    Movie
    .find()
    .then(movies => res.render('movies', { movies }))
    .catch(err => console.log(err))

});

// Movie details page
router.get('/movies/:id', (req, res) => {

    const { id } = req.params
    
    Movie
        .findById(id)
        .then(movie => res.render('details', movie))
        .catch(err => console.log(err))

})

module.exports = router;
