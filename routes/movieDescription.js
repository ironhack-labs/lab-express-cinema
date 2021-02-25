const express = require('express');
const router = express.Router();

const movieModel = require("./../models/Movie.model")

/* GET home page */
router.get('/:id', (req, res, next) => {
    movieModel.findById(req.params.id)
        .then(movie => {
            console.log(movie.title)
            res.render("movieDescription", {movie: movie, showtimes: movie.showtimes.join(" | ")})
        })
        .catch(error => console.log(error))
});

module.exports = router;
