const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

const movies = require("../bin/seeds.js")

router.get("/movies", async (req, res, next) => {

    const movie = await Movie.find().catch(err => {
      console.log('Error in fetching data');
    });

    if (movie) {
      console.log("encottradi");
      console.log(movie)
      res.render("movies", { movie });
    }

});

router.get("/movies/:id", async (req, res, next) => {

    const movie = await Movie.findById(req.params.id).catch(err => {
      console.log('Error in fetching data');
    });

    if (movie) {
      console.log("encottradi");
      console.log(movie)
      res.render("seeMore", { movie });
    }

});


module.exports = router;
