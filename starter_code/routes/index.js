const express = require('express');
const router  = express.Router();
const movieModel = require("./../models/Movie");
const mongoose = require("mongoose") ;



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// on va chercher les films dans la bdd
router.get("/movies", (req, res, next) => {
  movieModel.find().then(dbRes => {
      console.log(dbRes)

    console.log("Je vais bien tout va bien")
      res.render("movies", {movies: dbRes})

  }).catch(err => console.log(err))
  
})


//
router.get("/movie/:id", (req, res) => {
  movieModel
    .findById(req.params.id)
    .then(movie => {
      res.render("page-movie", { movie });
    })
    .catch(dbErr => console.error("OH no, db err :", dbErr));
});




module.exports = router;
