const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', async (req, res, next) => {
    const movies = await Movie.find();
    res.render('movies', {movies})
})


router.get("/movies/:id", async (req, res) => {
const { id } = req.params
const movies = await Movie.findById(id)
 res.render("moviesDetail", {movies})
})


module.exports = router;
