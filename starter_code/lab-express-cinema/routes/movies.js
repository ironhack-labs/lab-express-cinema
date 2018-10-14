const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost/cinemaApp',{
  useNewUrlParser: true,
});


const movieSchema = new Schema ({
  title: String,
  director: String,
  image: String,
  stars: Array,
  description: String,
  showtimes: Array
})

const Movie = mongoose.model("Movie", movieSchema);
const moviesArray = [];


/* GET movies page. */
router.get('/', function(req, res, next) {
  Movie.find()
    .then(movie =>
      res.render('movies', {movie}))

  res.render('movies', { title: 'Movies' });
});

module.exports = router;
