const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
    const moviesFromDB = await MovieModel.find();
    res.render('movies', { movies: moviesFromDB});
});







module.exports = router;
