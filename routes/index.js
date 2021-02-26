const express = require("express");
const router = express.Router();

const MovieModel = require("../models/Movie.model");

GET home page 
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies/:id", (req, res, next) => {
  MovieModel.findById(req.params.id)
    .then((moviesDocument) => {
      res.render("movies.hbs", { movie: moviesDocument });
    })
    .catch((error) => {
      console.log(error);
    });
});

/*
router.get("/", function (req, res, next) {
  console.log("this is req params:", req.params);
  MovieModel.find()
  .then((dbRes) => {
    res.render("movies.hbs", { movies: dbres});
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get("/", (req, res, next) => res.render("index"));

router.get("/movies/:id", (req, res, next) => {
  MovieModel.findById(req.params.id)
    .then((moviesDocument) => {
      res.render("movies.hbs", { movie: moviesDocument });
    })
    .catch((error) => {
      console.log(error);
    });
});

/*
router.get("/movies/:id", (req, res, next) => {
  MovieModel.findById(req.params.id)
    .then((MovieModel) => {
      res.render("movies.hbs", { movie: MovieModel });
    })
    .catch((error) => {
      console.log(error);
    });
}); */


module.exports = router;
