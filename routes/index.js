const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// router.get('/movies', (req, res, next) => res.render('movies'));
router.get('/movies', async (req, res, next) => {
try {
    const movies = await Movie.find();
    console.log(movies);
    res.render('movies', { movies });
} catch (error) {
    next(error);
    return error;
}
});

router.get('/:id', async (req, res, next) => {
    try {
    const {id} = req.params;

    const movies = await Movie.findById(id);

    //console.log((await celebrity).toJSON());

    res.render('movies-detail', movies)
    
} catch (error) {
    next(error);

    return error;
}
});

module.exports = router;
