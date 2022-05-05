const router = require('express').Router();
const Movie = require('../models/Movie.model');


router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render('movies', {movies});
        console.log(movies)
    } catch (error) {
        console.error(error)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const movie = await Movie.findById(id);

        res.render('movies-details', movie)
    } catch (error){
        console.error(error)
    }
});

module.exports = router;