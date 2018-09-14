const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
}); 

router.get("/list", (req, res, next) => {
  Movie.find()
  .then((movies) => {
    res.render("movieList", {movies});
  })
.catch(e => console.log(e));
})

router.get("/movie/:id", (req, res) => {
  let movieId = req.params.id;
  Movie.findById(movieId).then((movie) => {
    res.render("movie", {movie});
  })
  .catch((e) => {console.error(e);});
});
module.exports = router;
