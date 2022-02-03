const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))

})

router.get('/details/:_id', (req, res, next) => {
    const { _id } = req.params
        Movie
        .findById(_id)
        .then(movies => res.render('details', {movies}))
        .catch(err => console.log(err))

})


module.exports = router;
