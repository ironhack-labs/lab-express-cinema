const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
    
    Movie.find({})
    .then(allMovies => res.render('movies', { allMovies }))
    .catch(error => console.log('Error found'));
});
router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => res.render('details', { movie }))
    .catch(error => console.log(`Founded error in details page`, error))
});


module.exports = router;
