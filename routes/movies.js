
const express = require('express');
const router = express.Router();
const MoviesModel = require('./../models/Movie.model');


router.get('/movies', function (req, res, next) {
  
    MoviesModel.find()
      .then((dbRes) => {
        console.log(dbRes);
        res.render("movies.hbs", {movie: dbRes});
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  module.exports = router;