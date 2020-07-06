const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res) => {
  try {
      //console.log("in /movies try")
    const movies = await MovieModel.find();
    //console.log("retrived movies !")
    res.render("movies", {movies});
  } catch (err) {
    console.error(err);
  }
});

router.get("/movies/:id", async (req, res) => {
    try {
        console.log(`movie id is ${req.params.id}`)
        console.log("in movies/:id try")
        const movie = await MovieModel.findById(req.params.id);
        console.log("got the movie by id")
        res.render("movie", {movie}) 
    } catch (err) {
        console.error(err)
    }
})

module.exports = router;
