const express = require('express');
const router = express.Router();
const Movie = require("../models/MovieModel.js");


/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get('/movies', async(req, res) => {
  const pelis=await Movie.find();
  console.log(`agregando ${pelis} a la pagina`)
  res.render('movies', {pelis})
});

router.get('/moviedetails/:movieId', async(req, res) => {
  const {movieId} = req.params;
  const peli = await Movie.findById(movieId)
  console.log("logrando...")
  res.render("moviedetails", peli)
});

module.exports = router;

