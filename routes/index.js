const express = require('express');
const router = express.Router();


const Movie = require('../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies/listado', (req, res) => {

    Movie
        .find()
        .select('title')
        .then(movies => res.render('movies-list', { movies }))
        .catch(err => console.log(err))
})

module.exports = router;
