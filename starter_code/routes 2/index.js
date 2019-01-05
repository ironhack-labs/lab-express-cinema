const express = require('express');
const router  = express.Router();
const Movies   = require("../models/movie")
const mongoose     = require('mongoose');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find().then(movies => {res.render("movies", {movies})}).catch(() => {console.log("error")})
});

router.get("/movie/:id", (req, res) => {
  Movies.findById(req.params.id).then(movie => {res.render("moviedetail", movie)}).catch(err => {console.log(err)})
})

module.exports = router;
