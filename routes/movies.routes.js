const router = require("express").Router();

const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res, next) => {
    try {
        const moviesDB = await Movie.find()
        res.render('movies', { moviesDB })
    } catch (error) {
        console.log(error);
    }
})

router.get('/movies/:moviesId', async (req,res,next) => {
    try {
        const movie = await Movie.findById(req.params.moviesId)
        res.render('movie-details', movie)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;