const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
/* GET home page */
router.get("/", (req, res) => {
  res.render("index");
});

/* Get movies page */
router.get("/movies", (req, res) => {
  Movie.find()
    .then(allTheMovies => {
      res.render("movies", {allTheMovies});
    })
    .catch(err => {
      next(err);
    });
});


router.get("/movie/:id", (req,res)=>{

  Movie.findById(req.params.id)
  .then((oneMovie)=>{
    res.render("movie", {oneMovie})
  })
  .catch((err)=>{
    next(err);
  })
})


module.exports = router;
