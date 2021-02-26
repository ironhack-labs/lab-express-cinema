const express = require('express');
const router = express.Router();

const MovieModel = require ("./../models/Movie.model");

// http://localhost:3000/movies
router.get("/", function (req, res, next) {
    // console.log("aoao")
    MovieModel.find()
    .then(movieslist => {
        res.render("movies.hbs", {list : movieslist});
    })
    .catch(error => console.log(error));
});

//http://localhost:3000/movies/movies/fkzegfakzh(ceci est un :id)
router.get("/:id", (req, res, next) => {
    // console.log("bebe")
    MovieModel.findById(req.params.id)
     .then((movieDocument) => {
       res.render("movieDetails.hbs", { movies : movieDocument});
     })
     .catch((error) => {
         console.log(error);
     });
});

module.exports = router