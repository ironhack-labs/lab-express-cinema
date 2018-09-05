const express = require('express');
const Movies = require("../models/Movie.js")
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET movies page
router.get("/movies", (req, res, next) =>{
  Movies.find()
  .then(moviesResults => {
    res.locals.moviesArray = moviesResults;
    res.render("movies.hbs");
  })
  .catch(err => next(err));
});

// Link to this page from the list : /book/999
router.get("/one-movie/:moviesId", (req, res, next) => {
  // get the ID from the URL
  const {moviesId} = req.params;
  Movies.findById(moviesId)
  .then(moviesDoc => {
    // send the database results (1) to the template as "bookItem"
    res.locals.moviesItem = moviesDoc;
    res.render("one-movie.hbs");
  })
  // "next()" means show the error page
  .catch(err => next(err));
});




module.exports = router;
