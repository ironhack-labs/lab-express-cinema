const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.models')


/* GET movies page */
router.get('/movies', (req, res) => {
    res.render('movies-page')
});


module.exports = router;






