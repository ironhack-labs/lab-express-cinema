const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.model.js')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


//// Movies Page//////
router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(allMovies => res.render('movies', { movie: allMovies }))
        .catch(err => console.log(err))
})
//// single movie page///
router.get('/movie/:id', (req, res) => {
    const id = req.params.id
    Movie
        .findById(id)
        .then((movie) => {
            res.render('movie', movie)
        })
        .catch(err => console.log(err))
})

module.exports = router;
