const express = require('express');

// required for Movie.find
const Movie = require("../models/movie-model.js")

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// --- ROUTES ---

router.get("/movies", (req, res, next) => {
  Movie.find()
  .then((movieResults) => {
    // send database results to the view as "movieArray"
    res.locals.movieArray = movieResults;
    res.render("movies.hbs");
  })
  .catch((err) => {
    // show error page
    next(err);
  });
});

router.get("/watch", (req, res, next) => {
  // the "b" matches after the ? in the link and the 2 following mean the same thing:
  // const b = req.query.b;
  const { m } = req.query;

  // either one of these finds will work:
  // Book.findOne( { _id: x })
  Book.findById(m)
    .then((movieDoc) => {
      // bookdoc is a parameter of this function
      // bookitem is a local variable?
      res.locals.movieItem = movieDoc;
      res.render("movie-details.hbs");
    })
    .catch((err) => {
      // show our error page
      next(err);
    });
});
// On the /movies route, we need to list all the movies we have in our database.
// You should create a movies.hbs file, and pass the data about the movies.
router.get("/movie/:movieId", (req, res, next) => {
  // get the ID from the URL
  // const bookId = req.params.bookId
  // or
  const { movieId } = req.params;

  // Book.findOne({ _id: bookId })
  // or
  Movie.findById(movieId)
  .then((movieDoc) => {
    res.locals.movieItem = movieDoc;
    res.render("movie-details.hbs");
  })
  .catch((err) => {
    next(err);
  });
});



module.exports = router;
