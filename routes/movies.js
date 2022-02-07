const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((moviesArr) => {
      res.render("movies/movies-list", { movies: moviesArr });
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

router.get("/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movieId => {
      res.render("movies/movies-details", movieId)
    })
    .catch("Can't find it sorry");
})


router.post("/:movieId/delete", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.movieId)
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => {
      console.log("Error deleting movie...", err);
    });

});

module.exports = router;
