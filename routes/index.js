const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')
// const data = require('../bin/seeds.js');
// console.log(data);
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
// Movie.insertMany(data);
const movies = require("../bin/seeds.js")
router.get("/movies", async (req, res, next) => {

  // async function getMovies() {
    const movie = await Movie.find().catch(err => {
      console.log('Error in fetching data');
    });

    if (movie) {
      console.log("encottradi");
      console.log(movie)
      res.render("movies", { movie });
    }
  // }

  // getMovies()
});



module.exports = router;
