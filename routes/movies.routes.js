const router = require('express').Router();
const Movie = require('../models/Movie.model');

app.get("/movies", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render('/movies', {movies});
    } catch (error) {
        console.log(error)
    }
})