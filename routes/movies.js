const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

router.get('/movies', (req, res) => {
    res.send('movies-page')
});

module.exports = router;
