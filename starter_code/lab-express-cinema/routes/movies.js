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


/* GET movies page. */
router.get('/', (req, res, next) => {
  Movie.find()
    .then(movie => {
      res.render('movies', {movie});
    })
    .catch(error => {
      console.log('error', error);
    })
});

router.get('/:_id', (req, res, next) => {
  const id = req.params._id;
  Movie.findById(id)
    .then(movie => {
      res.render("displayMovie", {movie});
    })
    .catch(error => {
      console.log('Error finding movie ID', error);
    })
})

module.exports = router;
