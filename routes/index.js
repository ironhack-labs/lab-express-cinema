const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
  .then(movies => {
    const dataMovies = movies;
    console.log(dataMovies);
    res.render("movies.hbs", { dataMovies });
  })
  .catch(err => {
    console.error(err);
    throw err;
  });
})

router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(data => {
      data.showtimes = data.showtimes.join(' | ')
      res.render('movie', { movie: data })
  })
  .catch(err => {
      console.log(`Ran into an error getting movie ${req.id}: ${err}`)
      res.send(err)
  })
})

module.exports = router;
