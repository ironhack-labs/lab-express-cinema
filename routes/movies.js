const express = require("express");
const router = express.Router();
const HackerModel = require("./../models/Movie.model");

router.get("/:id", (req, res, next) => {
    
    console.log(req.params.id); 
    
    HackerModel.findById(req.params.id)
      .then((movieFromDb) => {
        res.render("one-movie", {
          movie: movieFromDb,
        });
      })
      .catch((dbError) => {
        next(dbError);
      });
  });

  module.exports = router;