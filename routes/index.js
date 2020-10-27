const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();
/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});
router.get('/movies', async (req, res, next) => {
    const movies = await Movie.find();
    res.render('movies', {movies})
});
router.get('/movies/:id', async (req, res, next) => {
    const selectMovie = await Movie.findById(req.params.id);
    res.render('info', {selectMovie})  
})
module.exports = router;