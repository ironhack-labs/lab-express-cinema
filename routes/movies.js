const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie.model");

router.get("/", (req, res, next) => {
    
    MovieModel.find()
      .then((movieDatabase) => {
        res.render("movies", {
          list: movieDatabase,
        });
      })
      .catch((dbError) => {
        next(dbError);
      });
  });
  
  
   router.get("/:id", (req, res, next) => {
    console.log(req.params.id); 
    
    MovieModel.findById(req.params.id)
      .then((movieDatabase) => {
        res.render("movies", {
          movies: movieDatabase,
        });
      })
      .catch((dbError) => {
        next(dbError);
      });
  });
  
  router.get("/as-json", async (req, res, next) => {
    try {
      const movies = await MovieModel.find();
      res.json(movies);
    } catch (dbError) {
      next(dbError); 
    }
  });
  
  module.exports = router;