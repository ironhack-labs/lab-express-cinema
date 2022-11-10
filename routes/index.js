const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(moviesFromDB => {
            res.render('movies', { movies: moviesFromDB })

        })
        .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));

});
router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(moviesFromDB => {
            res.render('movie-details', moviesFromDB)

        })
        .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));

});





module.exports = router;
