const express = require('express');
const router = express.Router();
const moviesModel = require('../models/movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    moviesModel.find()
        .then((movies) => {
            res.render('movies', { movies });
        })
        .catch((err) => {
            console.error(err);
        });
});



router.get('/movie/:id', (req, res, next) => {
    moviesModel.findById(req.params.id)
        .then((movieId) => {
            res.render('movie', movieId);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;
