const express = require("express"); //link with express
const router = express.Router(); //using express router management
const MovieModel = require("./../models/Movie.model.js"); //link with the model I created in ./../models/Movie.models.js use tab to have the correct path

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET movies page */
router.get("/movies", (req, res, next) =>
  MovieModel.find().then((dbResult) => {
    res.render("movies.hbs", { movies: dbResult });
    // i want movies pages with movies data
  })
);

// RENDER what the page s going to print if we had said "olala" we would have an empty page with olala
// here we want too display the content created in the movies.hbs

router.get("/movies/:id", (req, res, next) => {
  MovieModel.findById(req.params.id)
    .then((dbResult) => {
      res.render("movie.hbs", { movie: dbResult });
    })
    .catch((dbErr) => {
      next(dbErr);
    });
});

router.get("/movies/delete/:id", (req, res, next) => {
  MovieModel.findByIdAndDelete(req.params.id)
    .then((dbSucess) => {
      res.redirect("/movies");
    })
    .then((dbErr) => {
      next(dbErr);
    });
});

module.exports = router;
