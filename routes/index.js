const express = require('express');
const router = express.Router();
const moviesModel = require('../models/movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    moviesModel.find()
        .then((movies) => {
            console.log('ALL THE movies -------->', movies)
            res.render('movies', { movies });
        })
        .catch((err) => {
            console.error(err);
        });
});


router.get('/movie/:id', (req, res, next) => {
    // Iteration #4: Update the drone
    // ... your code here
    moviesModel.findById(req.params.id)
        .then((movieId) => {
            console.log('ESTOYYYYYY AQUIIIIIII', movieId)
            res.render('movie', movieId);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;
