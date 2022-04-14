const express = require('express');
const router = express.Router();


const Films = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => {

    res.render('index')
});
router.get('/movies', (req, res) => {
    Films
        .find()
        .then(allMovies => {
            res.render('movies-page', { allMovies })
        })
        .catch(err => console.log('estoy en dadno error' + err))
})

router.get('/movies/:id', (req, res) => {

    const { id } = req.params
    Films
        .findById(id)
        .then(movie => {
            res.render('one-movie-page', movie)
        })
        .catch(err => console.log('estoy en dadno error' + err))
})

module.exports = router;
