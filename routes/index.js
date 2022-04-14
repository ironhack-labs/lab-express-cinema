const express = require('express');
const router = express.Router();

const movies = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/movies', (req, res) => {
    movies
        .find()
        .then(movies => {
            console.log('Disfruta de nuestra selección', movies)
            res.render('movies', { movies })
        })
});

router.get('movies/movie_id', (req, res) => {
    const movie_id = req.params.id;
    res.send("holi")
})

module.exports = router;
