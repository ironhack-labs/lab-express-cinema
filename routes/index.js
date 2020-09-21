const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.models")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async (req, res) => {
    const movie = await MovieModel.find(); 
    console.log(movie);
    res.render("movies", { movie });
});

router.get("/movie-details/:id", async (req, res) => {
    MovieModel.findById(req.params.id)
    .then((dbRes) => {
        res.render("movieDetails", { movie: dbRes });
      })
      .catch(next);
});

module.exports = router;
