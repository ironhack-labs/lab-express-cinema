const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => {

    res.render('index')
});

router.get('/movies', (req, res) => {

    Movie
        .find()
        .select({ title: 1, image: 1 })
        .then(moviesData => {
            // console.log(moviesData)
            // res.send(moviesData)
            res.render('Movies/movies', { moviesData })
        })
        .catch(err => console.log(err))
    console.log
})

router.get('/movie-details/:movie_id', (req, res) => {
    const { movie_id } = req.params
    Movie
        .findById(movie_id)
        .then(movieSpec => {
            console.log(movieSpec)
            res.render('Movies/movies_detail', { movieSpec })
        })

})

module.exports = router;
