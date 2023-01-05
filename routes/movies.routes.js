const router = require("express").Router();

const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find()
        
    } catch (error) {
        console.log();
    }
})