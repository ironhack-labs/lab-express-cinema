const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Movies = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) =>
  Movies.find().then((allmovies) => {
    //console.log(allmovies);
    res.render("movies", { allmovies });
  })
);

router.get("/moviedetails/:id", (req, res) => {
  Movies.findById(req.params.id).then((moviedetails) => {
    // console.log(moviedetails);
    res.render("moviedetails", moviedetails);
  });
});

module.exports = router;

//Hay que traer el modelo de movies -> find()
// allmovies es el nombre que luego se coloca en movies.hbs

//Hay que traer la peli por su id, pidiendo por parámetro
// moviedetails es el nombre que luego se utiliza en moviedetails.hbs
