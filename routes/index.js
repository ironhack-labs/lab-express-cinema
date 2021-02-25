const express = require('express');
const router = express.Router();

const FilmModel = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", function (req, res, next) {
  
    FilmModel.find()
      .then((dbRes) => {
        // console.log(dbRes);
        res.render("movies.hbs", {movies: dbRes});
      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;
