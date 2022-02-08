const router = require("express").Router();
const Movie = require("../model/movies.model");



router.get("/", (req, res, next) => {
    Movie.find()
    .then(resultsFromDB => {
        console.log(resultsFromDB);
        res.render("movies", {movies: resultsFromDB})
    })
        .catch();
});

router.get("/:movieId", (req, res, next) => {
    Movie.findById(req.params.movieId)
      .then( movie => {
        //   console.log(movie)
        res.render("movie-id", movie);
        // res.send("cheak")
      })
      .catch();
  });
module.exports = router;