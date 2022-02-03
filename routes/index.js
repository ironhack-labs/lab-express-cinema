const express = require('express');
const router = express.Router();

const Movie = require('./../models/movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) =>
    Movie
        .find()
        .then(movies => (res.render('movies/movies', { movies })))


        .catch(err => console.log(err))
)
router.get('/details/:movieID', (req, res) => {
    const { movieID } = req.params
    Movie
        .findById(movieID)
        .then(movie => res.render('movies/details', movie))
})





module.exports = router;
