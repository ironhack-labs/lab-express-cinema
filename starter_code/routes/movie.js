const express = require('express');
const router  = express.Router();

const moviesModel = require("../models/movie.js")

router.get("/movies",(req,res)=>{
  moviesModel.find({})
  .then(dbRes=>{console.log("movies found")
  res.render('movies', { movies: dbRes});
  })
  .catch(dbErr=>console.log("no movies found"))
})

module.exports = router;

// router.get("/movies/:id", (req,res)=>{
//   const movieFound = movies.filter(movie => movie._id == req.params.id)[0];
//   console.log("movie found")
//   console.log(movieFound);
//   console.log(req.params);
//   res.render("movie-details",{ movie: movieFound })
// });