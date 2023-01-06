const router = require("express").Router();

const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res, next) => {
    try {
        const moviesDB = await Movie.find()
        console.log(moviesDB);
        res.render('movies', { moviesDB })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;