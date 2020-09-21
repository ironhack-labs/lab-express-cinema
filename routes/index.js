const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
// router.get('/', (req, res, next) => res.render('index'));



router.get("/", (req, res, next) => {

    res.render("index", {
      css: ["style"],
    });
  });


/* GET movie page */

router.get("/movies", (req, res, next) => {
    console.log(req.body, "this is body");
    console.log(req.params, "this is req params-----");


   Movie.find({}) // --- ^
     .then((dbResult) => {
       res.render("movies", { movies: dbResult, css: ["stylemovies"] });
     })
     .catch((error) => {
       next(error); // Sends us to the error handler middleware in app.js if an error occurs
     });
 });

module.exports = router;
