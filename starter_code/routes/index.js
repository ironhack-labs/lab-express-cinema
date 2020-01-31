const express = require('express');
const router = express.Router();
const Movies = require('../models/movies');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');

});

router.get('/movies', (req, res) => {
    Movies.find()
        .then(data => res.render('movies', { data }))
        .catch(err => console.log('no jalo'))
});

router.get('/movies/:movieId', (req, res) => {
    const { movieId } = req.params;
    Movies.find({ _id: movieId })
        .then(oneMovie => res.render('movie', { oneMovie }))
        .catch(err => console.log(err))
});

module.exports = router;