const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie");


/* GET movies page */
router.get("/", (req,res) => {
  Movie.find()
    .then(movies => {
      res.render("movie", {movies})
    })
    .catch(err => console.log(err));
  
  
});

module.exports = router;