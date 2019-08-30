const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then(dbRes => {
      console.log(dbRes);
      res.render("movies", { movies: dbRes });
    })
    .catch(dbErr => console.log(dbErr));
});


router.get("/movie/:id", (req, res, next) => {
  console.log(req.params)
  MovieModel.findOne({_id: req.params.id})
    .then(dbRes => {
      console.log(dbRes);
      res.render("movie", { movie: dbRes });
    })
    .catch(dbErr => console.log(dbErr));
});

module.exports = router;
