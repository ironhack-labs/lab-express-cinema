const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies } );
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movie/:id", (req, res, next) => {
  Movie.findOne({ _id: req.params.id })
    .then(movie => {
      res.render("movie", { movie });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movie", (req, res, next) => {
  res.render("movie");
});

// router.get('/paco', (req, res, next) => {
//   res.render('vistapaco');
// });

module.exports = router;
