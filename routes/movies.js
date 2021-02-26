const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie.model.js");
/* GET home page */
router.get("/", function (req, res, next) {
  MovieModel.find()
    .then((dbRes) => {
      res.render("movies.hbs", {
        list: dbRes,
        css : ['movies']
      });
    })
    .catch((dbError) => {
      res.send(dbError);
    });
});

router.get("/:id", (req, res, next) => {
  console.log(req.params.id);

  MovieModel.findById(req.params.id)
    .then((dbRes) => {
      res.render("movie.hbs", {
        movie: dbRes,
        css : ['movie']
      });
    })
    .catch((dbError) => {
      next(dbError);
    });
});

module.exports = router;
