const express = require('express');
const router = express.Router();
const Movie = require("../model/Movie.model")


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    console.log("movies");
    Movie.find()
      .then(allTheMovies => {
          console.log(allTheMovies);
          res.render("movies", { allTheMovies })
        })
      .catch(err => console.log(err))
  
  });

module.exports = router;
