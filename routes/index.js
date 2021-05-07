const express = require("express");
const router = express.Router();
const Movie = require("./../models/Movie.model");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((dbResult) => {
      res.render("movies.hbs", {
        movies: dbResult,
      });
    })
    .catch((dbErr) => {
      next(dbErr);
    });
});
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((dbResult) => {
      res.render("movieDetail.hbs", {
        movies: dbResult,
      });
    })
    .catch((dbErr) => {
      next(dbErr);
    });
});

// router.get("/movies/:id", (req, res,next) => {
// Movie.findById(req.params.id).then((dbSuccess)=>{
// res.render("movieDetail.hbs"),
// }
// ));

module.exports = router;
