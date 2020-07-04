const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/:movieId', (req, res, next) => {

    const movieId = req.params.movieId

    console.log(movieId);

    Movie.find({ _id: movieId })
        .then((movieFromDb) => {
            // console.log(movieFromDb);
            res.render('movie', { movie: movieFromDb })
        })
        .catch(error => console.log('An error happened while find movies:', error));
})


module.exports = router;
