const express = require('express');
const router = express.Router();
const MoviesModel = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies */
router.get('/movies', async(req, res) => {
    const moviesFromSeed = await MoviesModel.find();
    res.render('movies', {moviesFromSeed});
});
module.exports = router;

/* GET single movie */
router.get("/movies/:id", async (req, res) => {

  const { id } = req.params;
  const singleMovie = await MoviesModel.findById(id);
  console.log("that movie:", singleMovie);
  res.render("movie-detail", { singleMovie });
});