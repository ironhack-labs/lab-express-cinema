const express = require('express');
const router = express.Router();
const Movie = require("./../models/movie.model")
/* GET home page */
router.get('/', (req, res) =>
    res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(moviesDB => {
            res.render('movies', { moviesDB })
        })
        .catch(err => console.log('Se produjo un error:', err))
})


module.exports = router;

