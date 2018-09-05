const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) => {
  Movie.find()
  .then(foundCollection => {
    res.locals.foundCollection = foundCollection;
    res.render("movies")
  })
  .catch(err => console.log(err))

})

router.get("/movie/:id", function(req, res, next){
  console.log(req.params.id)
  Movie.findById(req.params.id)
  .then(foundMovie =>{
    res.locals.foundMovie = foundMovie;
    res.render("movie-details")
  })
  .catch(err => console.log(err))
})

module.exports = router;
