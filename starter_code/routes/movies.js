const express = require("express");
const router = express.Router();
const movieModel = require("../models/Movie");

/* GET movies page */
router.get("/movies", (req, res) => {
  movieModel.find().then(dbRes => {
    res.render("movies", { movies: dbRes });
  });
});

router.get("/movies/:id", (req, res) => {
  movieModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("seemore", { movie: dbRes });
    })
    .catch(err => console.log(err));
});

module.exports = router;
