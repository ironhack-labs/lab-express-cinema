const express = require('express');
const router = express.Router();
const Movie= require("../models/Movie.model")


/* GET home page */
router.get('/', (req, res, next) => res.render('index', {layout:false}));

const movies = require("../bin/seeds.js")

router.get("/movies", async (req, res, next) => {

    const movie = await Movie.find()
      res.render("movies", { movie });

});

router.get("/movies/:id", async (req, res, next) => {

    const movie = await Movie.findById(req.params.id);

      res.render("seeMore", { movie });

});


module.exports = router;

