const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model.js");

/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get('/movies', async (req,res) => {
    const movies = await Movie.find()
    res.render("movies", {movies});
})

router.get("/movies/:movieId", async (req, res) => {
    const {movieId} = req.params
    const movie = await Movie.findById(movieId);
    res.render("details", { movie });
  });
  
module.exports = router;
