const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */

router.get('/movies', async (req, res) => {
    try {
        const allMovies = await Movie.find()
        res.render('movies', { allMovies })
    }
    catch (err) {
        console.log('Error rendering movies', err)
    }
})

// GET movie description page

router.get('/movie/:id', async (req, res) =>{
    try{
        const oneMovie = await Movie.findById(req.params.id)
        res.render('movie.hbs', oneMovie)
    } catch {
        console.log('Error rendering movie', err)

    }

})

module.exports = router;
