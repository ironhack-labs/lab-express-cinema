const express = require('express');
const router = express.Router();
const MoviesModel = require("../models/Movies.models")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async (req, res) => {
    const movie = await MoviesModel.find(); // wait
    res.render("movies", { movie });
});

router.get("/movies-details/:id", (req, res, next) => {
    MoviesModel.findById(req.params.id)
      .then((dbRes) => {
        res.render("movieDetails", { movie: dbRes });
      })
      .catch(next);
  });

module.exports = router;
