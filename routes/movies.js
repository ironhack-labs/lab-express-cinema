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
    Book.findById(req.params.bookId)
      .then( book => {
        res.render("books/book-id", book);
      })
      .catch();
  });
module.exports = router;