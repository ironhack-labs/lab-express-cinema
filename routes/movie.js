const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

router.get("/movie/:id", (req, res, next) => {
   
    MovieModel.findById(req.params.id)
      .then((movieDocument) => {
        res.render("movie.hbs", { movie: movieDocument });
        // console.log(shoeDocument);
      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;