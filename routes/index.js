const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movies });
    })
    .catch((err) => console.error(err));
});
router.get("/movie/:id", (req,res,next)=>{
    const {id} = req.params;
    Movie.findById(id)
    .then ((movie)=>{
        console.log("***movie**", movie)
        res.render("movie-details", {movie})
    })
})

module.exports = router;
