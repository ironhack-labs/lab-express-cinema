const express = require('express');
const { geoSearch } = require('../models/Movie');
const router = express.Router();

//Llamar al modelo que hemos creado
const Movie = require("../models/Movie.js");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



// Iteration 3 - List the movies
router.get("/movies", (req, res, next) => {
    //Llamar al modelo y utilizar el método find
    Movie.find().then(
      //Almacenamos todo en allMovies
      function (allMovies) {
        //console.log("-----Movies", allMovies);
        //renderizamos movies con los datos de allMovies
        res.render("movies", { allMovies });
      },
      function (error) {
        console.log("Error while getting the books from the DB: ", error);
      }
    );
  });

//### Iteration 4 | Display Movie Details
router.get("/movie/:id", (req, res, next) => {
    // traemos el id a través de params, y lo metemos en una variable
    let movieId = req.params.id;
    Movie.findById(movieId).then(
      function (data) {
        console.log("Movie Details", data);
        res.render("details", { data });
      },
      function (err) {
        console.error(err);
      }
    );
  });


module.exports = router;
