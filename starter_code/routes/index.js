//JS global pour toutes fonctionnalités

const express = require("express");
const router = express.Router();
const MovieModel = require("./../Models/Movie"); //importe le model

/* GET home page */
router.get("/", (req, res, next) => {
  const data = { title: "Home" };
  res.render("index", data);
});

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then(dbResValue => {
      // console.log(dbResValue);
      res.render("movies", { movies: dbResValue });
    })
    .catch(dbErr => {
      console.log(dbErr);
    });
});

router.get("/movie/:id", (req, res, next) => {
  console.log("Hey !", req.params.id); // req.params.id = récupérer toute la partie id de l'url
  MovieModel.findOne({ _id: req.params.id })
    .then(dbRes => {
      console.log(dbRes);
      res.render("movie", { movie: dbRes });
    })
    .catch(dbErr => console.log(dbErr));
});

module.exports = router;
