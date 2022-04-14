const express = require('express');
const router = express.Router();

const Movie = require('./../models/movies.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get('/details/:id', (req, res) => {

    const { id } = req.params
    Movie
        .findById(id)
        .then(details => {
            res.render('details', details)
        })
        .catch(err => console.log(err))
})

module.exports = router;
