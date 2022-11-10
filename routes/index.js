const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model.js')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .select({ title: 1, image: 1 })
        .then(allMovies => {
            res.render('movies', { movies: allMovies })
        })
        .catch(err => console.log(err))
})

router.get('/movies/movie-details/:movies_id', (req, res) => {

    const { movies_id } = req.params

    Movie
        .findById(movies_id)
        .then(movieDetails => {
            res.render('movies/movie-details', movieDetails)

        })
        .catch(err => console.log(err))

})



module.exports = router;
