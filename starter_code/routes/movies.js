const express = require("express");
const Router = express.Router();

const Movie = require('../models/Movie')

Router.get("/", (req, res) => {
    Movie.find()
    .then(movies => {
      console.log(movies)
      res.render("movie", {movies});
    })
    .catch(err => console.log('Error', err))
  })
  Router.get("/:id", (req, res) => {
    console.log(req.params.id);
  
    Movie.findById(req.params.id)
      .then(movie => {
        console.log(movie);
        res.render("movie-info", {movie})
      })
  
    
  })

  module.exports = Router