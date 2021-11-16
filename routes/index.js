const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
    try {
        const allMovies = await Movie.find({})
        console.log(allMovies)
        res.render('allMovies.hbs', { allMovies })
    }
    catch (err) {
        console.log('Error rendering movies', err)
    }
})

module.exports = router;
