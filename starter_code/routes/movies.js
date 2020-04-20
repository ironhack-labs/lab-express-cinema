const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      //res.send(movies);
      res.render("movies", { moviesList: movies });
    })
    .catch((err) => {
      console.log("Error while accessing Movies Database", err);
    });
});

router.get("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then((movie) => {
      //res.send(movie);
      res.render("details", {details: movie})
    })
    .catch((err) => {
      console.log("Error when getting detail of the movie", err);
    });
});

module.exports = router;

/*
router.get("/books", (req, res) => {
  // get all the books
  Book.find().then((books) => {
    // render a 'books' view with the books data
    res.render("books", { booksList: books });
  });
  // res.send('this is the books route');
});

router.get("/books/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  Book.findById(bookId).then((book) => {
    // res.send(book);
    res.render("bookDetails", { book: book });
  });
});
*/
