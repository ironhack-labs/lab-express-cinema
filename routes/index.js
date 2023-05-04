const express = require('express');
const router = express.Router();


const Movie = require('./../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});


router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .select({ title: 1, image: 1 })
        .sort({ title: 1 })
        .then(movies => res.render('movies-page', { movies: movies }))
        .catch(err => console.log(err))

});


router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params
    console.log(id)

    Movie
        .findById(id)
        .then(movie => {
            res.render('movies-details', movie)
        })
        .catch(err => console.log(err))

});

module.exports = router;
