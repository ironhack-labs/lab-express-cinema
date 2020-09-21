const express = require('express');
const router = express.Router();
const movie = require("./../models/Movie.model")

/* GET home page */

 router.get('/index', async (req, res, next) => {
    try {
    const moviesList = await movie.find(); 
    res.render('movies', { movie : moviesList });
    console.log('movies');
    } catch (error) {
        next (error);
    }
});

module.exports = router;
