const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            console.log('From DB:', allMovies);
            res.render('movies', { allMovies });
        })
        .catch(error => {
            console.log('Error looking for movies:', error);
        });

});
router.get('/detail/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(theMovie => {
            console.log(theMovie);
            res.render('show', { theMovie });
        })
        .catch(error => {
            console.log('Error retrieving id:', error);
        });
});

module.exports = router;