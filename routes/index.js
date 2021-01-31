const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res, next) => {

    Movie.find()
        .then(allMovies => {
            res.render('movies',{movies: allMovies})})
        .catch(e => console.log('Error while getting the movies from the DB', e))
        
});

module.exports = router;
