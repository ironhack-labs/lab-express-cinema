const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res) => {
  try {
    let allMovies = await Movie.find();
    res.render("movies", { movies: allMovies });
  } catch (error) {
    console.log(error);
  }
});

router.get("/movies/:id", async(req,res)=>{
  const {id} = req.params;
  try{
    let movie = await Movie.findById(id);
    res.render("movie-details", {movie: movie});
  }
  catch(error){
    console.log(error);
  }
})

module.exports = router;