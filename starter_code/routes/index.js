const express = require('express');
const router  = express.Router();

const MoviesSeed = require ("../models/Movie.js");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

 router.get('/movies', (req, res, next) => {
//Whenever z user visits "/books" find all the books sorted by rating
MoviesSeed.find()
.then(movieResults =>{
  res.locals.moviesArray = movieResults;
  res.render("movies.hbs");
})
// next(err) skips to the error handler in "bon/wwww" (error.hbs)
.catch(err => next(err));
});

router.get("/movie/:id", (req, res, next) =>{
  
  // get the ID from the adress (it's inside of req.params)
  const {id} = req.params;
  // console.log(MoviesSeed.findById(moviesId))
  // find the book in the database using the ID from the adress
  MoviesSeed.findById(id)
  .then(movieDoc => {
    
    //send the database query result to the hbs file as "bookItem"
    res.locals.movieItem = movieDoc;
    res.render("movieInfo.hbs");
  })
  //next(err) skips to the error handler in "bin/www" (error.hbs)
  .catch(err => next(err));
})
module.exports = router;
