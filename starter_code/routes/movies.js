const express = require("express");
const Router = express.Router();

const Movie = require('../models/Movie')


Router.get("/", (req, res) => {
  Movie.find()
  .then(movies => {
    res.render("movies", {movies});
  })
  .catch(err => console.log('Error', err))
})

Router.get("/:id", (req, res) => {

  Movie.findById(req.params.id)
    .then(movie=> {
      res.render("movie-info", {movie})
    })

  
})



module.exports = Router;