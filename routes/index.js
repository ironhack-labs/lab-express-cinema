const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res) => res.render('index'));
router.get('/movies', (req, res) => {
    Movie.find({})
        .then((printAllMoviesCreated) => {
            res.render('movies', { printAllMoviesCreated })
        })
        .catch((error) => `Error viewing ${error}`)
})

module.exports = router;
