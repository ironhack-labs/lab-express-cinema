const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const MovieModel = require("./../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async (req, res, next) => {
    try {
        const movies = await MovieModel.find();
        res.render("movies", { movies }); 
    } catch (err) {
        next(err);
    }
});

router.get("/movies/:id", async (req, res, next) => {
    try {
        const movieDetails = await MovieModel.findById(req.params.id);
        res.render("movieDetail", movieDetails); 
    } catch (err) {
        next(err);
    }
});

module.exports = router;