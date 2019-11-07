const express = require("express");
const router = express.Router();
const moviesModel = require("./../models/movies");

router.get("/movies", (req, res) => {
  //res.render('movies');
  moviesModel.find().then(dbRes => {
    console.log(dbRes);
    res.render("movies", { movies: dbRes });
  });
});

router.get("/movies/:id", (req, res) => {
  //res.render('movies');
  moviesModel.findOne({ _id: req.params.id }).then(dbRes => {
    console.log("hereeeeeeeeeeeeeeeeeeeeeee")
    console.log(dbRes);
    res.render("movie", { movie: dbRes });
  });
});

module.exports = router;
