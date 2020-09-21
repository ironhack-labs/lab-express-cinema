const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  //   console.log(req.body, "this is body");
  //   console.log(req.params, "this is req params-----");

  //   Label.find() --- This has the same effect with or without an empty object. It will get you all the documents from the Label collection.
  Movie.find({}) // --- ^
    .then((dbResult) => {
      res.render("movies.hbs", { movies: dbResult });
    })
    .catch((error) => {
      next(error); // Sends us to the error handler middleware in app.js if an error occurs
    });
});

module.exports = router;
