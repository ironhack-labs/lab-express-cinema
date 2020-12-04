const express = require('express');
const router = express.Router();
const {
  getMovies,
  getMovie,
} = require("../controllers/movies.controller")

/* GET home page */
// 

router
.get('/', (req, res, next) => res.render('index'))
.get("/movies", getMovies)
.get("/movie/:movieId", getMovie)

module.exports = router;
