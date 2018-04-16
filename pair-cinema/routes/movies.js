const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
  
  /* CRUD -> Retrieve ALL */
  router.get("/", (req, res) => {
    Movie.find().then(movies => {
      
      res.render("movies", { movies });
    });
  });

  router.get("/:id", (req, res) => {
    Movie.findById(req.params.id).then(movie => {
      console.log(movie)
      res.render("movie", { movie });
    });
  });

  
  
module.exports = router;