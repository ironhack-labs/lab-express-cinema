const express = require('express');
const router = express.Router();
const Movies = require('../models/movies.js')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies',async (req, res, next)=> {
    const movies = await Movies.find()
    res.render("movies", {movies: movies})

    } )
module.exports = router;
