const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Movie = require("../models/movie-model.js")


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// aller chercher les movies dans la DB
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movieResults) => {
      // mettre book results dans un array qui sera visible dans le local views
      // send the database results to the view as "bookArray"
      res.locals.movieArray = movieResults;
      res.render("movies.hbs");
    })
    .catch((err) => { 
      // show our error page
      // next(err will communicate directly to the error page)
      next(err); 
    });
});

// dans les movies aller chercher les infos
// router utilisant la méthode amazon avec des req params
router.get("/movie/:movieId", (req, res, next) => {
  //get the Id from the URL
    //const bookId = req.params.bookId, in other words asf:
    const { movieId } = req.params ;
  console.log({movieId});

  // book.findOne({_id: bookId})
    Movie.findById(movieId) 
      .then((movieDoc) => {
        res.locals.movieItem = movieDoc;
        res.render("movie-details.hbs");
      })
      .cathc((err) => {
        next(err)
      });
  });
  





module.exports = router;
