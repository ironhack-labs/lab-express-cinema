const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .select({ title: 1, image: 1 })
        .sort({ title: 1 })
        .then(movies => res.render('movies/list', { movies }))
        .catch(err => console.log('Error', err))
})

router.get('/movies/details/:movieID', (req, res) => {
    const { movieID } = req.params
    Movie
        .findById(movieID)
        .then(movie => res.render('movies/details', movie))
        .catch(err => console.log('Error', err))

})

module.exports = router;
