const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();
//route below
router.get("/movie/:id", (req, res) => {
  //console.log(req.params);
  Movie.findById(req.params.id).then((movieData) => {
    console.log(movieData);
    res.render("movie", { movieData });
  });
});
module.exports = router;
