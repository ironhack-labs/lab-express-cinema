const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

/* GET movie page */
router.get(
  "/",
  (req, res, next) => {
    console.log("Reached movie page");
    next();
  },
  (req, res, next) => {
    Movie.find()
      .then(movies => {
        res.render("movies/list", { movies });
      })
      .catch(e => next(e));
  }
);

/* GET movie info (overview) page */
router.get("/overview/:id", (req, res, next) => {
  console.log(req.params.id);
  Movie.findById(req.params.id)
    .then(overview => {
      res.render("movies/overview", { overview });
    })
    .catch(e => next(e));
});

module.exports = router;
