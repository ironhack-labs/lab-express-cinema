const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .then(data => {
            console.log(data)
            res.render('movies', { data })
        })
        .catch(e => console.log(e))
});

router.get('/movies/:movieId', (req, res, next) => {
    const { movieId } = req.params

    Movie
        .findById(movieId)
        .then(data => {
            console.log(data)
            res.render('randomMovie', data)
        })

});

module.exports = router;
