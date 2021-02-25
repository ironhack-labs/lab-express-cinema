const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie/Movie.model");

/* GET movies page */
//vrqi route 3000/,ovies/
router.get("/", (req, res, next) => {
  MovieModel.find()
    .then((movieDocument) =>
      res.render("movies.hbs", { movies: movieDocument })
    )
    .catch((error) => console.log(error));
});

router.get("/", (req, res, next) => {
    MovieModel.find()
      .then((movieDocument) =>
        res.render("movies.hbs", { movies: movieDocument })
      )
      .catch((error) => console.log(error));
  });


  router.get("/:id", (req, res, next) => {
    MovieModel.findById(req.params.id)
      .then((movieDocument) =>
        res.render("movie.hbs", { movie: movieDocument })
      )
      .catch((error) => console.log(error));
  });
module.exports = router;
