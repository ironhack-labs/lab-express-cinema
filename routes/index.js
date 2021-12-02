const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
    try {
        const allMovies = await Movie.find({})
        // console.log(allMovies)
        res.render('allMovies.hbs', { allMovies })
    }
    catch (err) {
        console.log('Error rendering movies', err)
    }
})

router.get('/movie/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        console.log(movie)
        res.render('movie.hbs', movie)
    }
    catch (err) {
        console.log('Error loading movie data', err)
    }
})

module.exports = router;