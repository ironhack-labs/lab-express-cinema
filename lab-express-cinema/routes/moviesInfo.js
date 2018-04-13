const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie");


/* GET movies info page */
router.get("/:_id", (req, res) => {
  console.log("Hola")
  Movie.find({_id: req.params._id})
    .then(movie => {
      console.log(movie);
      res.render("movie_info", movie[0])
    })
    .catch(err => console.log(err));


});

module.exports = router;