const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

/* GET movies page */
//router.get('/movies', (req, res, next) => res.render('movies'));




router.get("/movies", function (req, res, next) {
    console.log("this is req params:", req.params);
    MovieModel.find()
      .then((dbRes) => {
        res.render("movies", { movies: dbRes });
      })
      .catch((error) => {
        console.log(error);
      });
  });



  module.exports = router;