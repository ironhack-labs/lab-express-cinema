const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res) => {
  // const movies = await Movie.find();
  // res.render("index", { movies });
  Movie.find().then(movies => res.render("movies", { movies }));
})

router.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => res.render("detail", movie))
    .catch(err => res.render("detail", { err: "No existe" }));

}) 



module.exports = router;
