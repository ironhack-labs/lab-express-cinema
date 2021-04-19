const express = require('express');
const router = express.Router();
const Movies = require("../models/movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {
    Movies.find({})
    .then((movies) => {
    res.status(200).render('movies', {movies})
    }).catch((err) => {
        console.error("error getting data")
    })
})

router.get('/movies/:movieId', (req, res, next) => {
    const { movieId } = req.params;
    Movies.findById(movieId)
        .then(movies => {
            res.render('movieselected', {movies});
        })
        .catch(error => {
            console.errir('Error while getting the movies from the DB: ', error);
            next(error);
        })
});


module.exports = router;
