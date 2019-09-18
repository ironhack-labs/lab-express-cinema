const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
/* GET home page */

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies/:id", (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then(dbRes => {
      console.log(dbRes);
      const hbsObj = {
        movie: dbRes
      };
      res.render("moviesdetail", { hbsObj });
    })
    .catch(errorCallBack => {
      console.log(errorCallBack);
    });
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(dbRes => {
      const hbsObj = {
        movies: dbRes
      };
      res.render("movies", { hbsObj });
    })
    .catch(errorCallBack => {
      console.log(errorCallBack);
    });
});

module.exports = router;
