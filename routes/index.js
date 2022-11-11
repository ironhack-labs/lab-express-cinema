const express = require('express');
const router = express.Router();

const MovieModel = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    MovieModel
        .find()
        .then((moviesFromDB) => {
            res.render('movies', { movies: moviesFromDB })
        }
        )
}
)

module.exports = router;

router.get('/movies', (req, res) => {
    res.render('movies')
})
