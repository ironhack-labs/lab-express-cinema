const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
    const movies = await Movie.find()
    res.render("movies",{movies});
})
router.get('/movies/:id', async (req, res) => {
    const {id} = req.params
    const movie = await Movie.findById(id)
    res.render("movieDetail", movie);
})
module.exports = router;
