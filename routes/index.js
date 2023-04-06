const express = require('express');
const router = express.Router();
const MoviesModel = require("../models/Movie.model");

/* GET home page */
router.get('/', async (req, res, next) => {
    const moviesFromDb = await MoviesModel.find();

    
    console.log("from db", moviesFromDb);
    
    res.render('index', {moviesFromDb})
});

router.get('/movies', async (req, res, next) => {
    const moviesFromDb = await MoviesModel.find();

    
    console.log("from db", moviesFromDb);
    
    res.render('movies', {moviesFromDb})
});



module.exports = router;
