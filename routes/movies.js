const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => {
  Movie.find()
    .then((results) => {
      console.log("These are the results", results);
      res.render("movies", { results: results });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.get("/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((results) => {
      console.log("These are the results", results);
      //There's nothing wrong with doing it this way
      res.render("movie", results);

      //A more dynamic version
      //   res.render('petPage', results);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

module.exports = router;
