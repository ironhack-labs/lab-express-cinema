const express = require("express");
const router = new express.Router();

const Movies = require("./../models/Movies");

  
  router.get("/movie", (req, res) => {
    Movies.find().then(dbRes => {
      console.log(dbRes);
      res.render("movies", { movies: dbRes});
    });
  });
  
  router.get("/movie/:id", (req, res) => {
    Movies.findOne({_id: req.params.id}).then(dbRes => {
      console.log(dbRes);
      res.render("movie", { movie: dbRes});
    });
  });
  
  module.exports = router;
  