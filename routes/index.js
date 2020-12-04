const express = require('express');
const router = express.Router();


const {movies, movieInfo} = require("../controllers/movies.controllers");

/* GET home page */
router
    .get('/', (req, res, next) => res.render('index'))
    .get('/movies' , movies)
    .get("/movieInfo/:filmId", movieInfo)

module.exports = router;
