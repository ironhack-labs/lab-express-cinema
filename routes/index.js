const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
    const moviesFromDB = await MovieModel.find();
    res.render('movies', { movies: moviesFromDB});
});

router.get('/movies/:id', async (req, res, next) => {
    const { id } = req.params;
    const oneMovie = await MovieModel.findById(id);
    // console.log("our one wizard", oneMovie);
    res.render('one-movie', oneMovie);

    // const moviesFromDB = await MovieModel.find();
    // res.render('movies', { movies: moviesFromDB});
});







module.exports = router;
