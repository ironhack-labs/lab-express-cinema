const express = require('express');
const router = express.Router();
const movieModel = require('../models/movie.models');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    movieModel.find()
        .select('title -_id')
        .then((movies) => res.render('movies', { movies }))
        .catch((err) => res.render('error'));
});

module.exports = router;
