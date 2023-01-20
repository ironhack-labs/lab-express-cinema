const express = require('express');
const Movie = require('../models/movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) =>{
    Movie.find()
    .then((moviesFromDB) => {
        res.render('movies', { moviesFromDB })
    })
    .catch((err) => console.log(err))
});

router.get('/movie/:id', (req, res, next) => {
    const { id } = req.params;

    Movie.findById(id)
    .then((movieFromDB) => {
        res.render('detail', { movieFromDB })
    })
    .catch((err) => console.log(err))
})
module.exports = router;
