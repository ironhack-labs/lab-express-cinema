const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');


/* GET movies page */
router.get('/movies', (req, res, next) => {
    Movies.find()
        .then(data => {
            console.log(data)
            res.render('movies', {movies:data})
        })
        .catch(err => {
            console.log('El error:', err)
        })
});

/* GET details page */
router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params;
    Movies.findById(id)
        .then(movie => {
            console.log(movie)
            res.render('movie-details.hbs', { movie: movie })
        })
        .catch(err => {
            console.log('Error while retrieving movie details: ', err);
            next(err);
        });
});



module.exports = router;