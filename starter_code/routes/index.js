const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/movies", (req, res, next) => {
  Movie.find()
  .then(movies => {
    console.log(movies)
    res.render("movies", {movies})
  })
  .catch(() => {
    (console.error('Error connecting to mongo', err))
  })
});

router.get("/movies/:id", (req, res, next)=>{
  Movie.findById(req.params.id)
  .then(movie => {
    console.log(movie)
    res.render("movieDetail", {movie})
  })
  .catch(()=> {
    (console.error('Error connecting to mongo', err))
  })
})


module.exports = router;
