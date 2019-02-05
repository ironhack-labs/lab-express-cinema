const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  // whenever a user visits "/movies"find all the movies (sorted by rating)
  Movie.find()
    .then(movieResults => {
      // send the database query results to the HBS file as "movieArray"
      res.locals.movieArray = movieResults;
      res.render("movies.hbs");
    })
    // next(err) skips to the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

// // Netflix style of addresses - PATH PARAMETERS
// // http://localhost:5555/book/5c59928
// router.get("/book/:bookId", (req, res, next) => {
//   // res.send(req.params);
//   const { bookId } = req.params;

//   // find the book in the database using the ID from the address
//   Book.findById(bookId)
//     .then(bookDoc => {
//       // send the database query results to the HBS file as "bookItem"
//       res.locals.bookItem = bookDoc;
//       res.render("book-details.hbs");
//     })
//     //
//     .catch(err => next(err));
// });

module.exports = router;
