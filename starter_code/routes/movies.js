const express = require('express');

const Movies = require('../models/Movie');

const router = express.Router();

router.get('/:id', (req, res) => {
  Movies.findOne({ _id: req.params.id })
    .then((movie) => res.render('movie', { movie }))
    .catch((error) => console.log(error));
});


router.post('/delete/:id', (req, res) => {
  Movies.deleteOne({ _id: req.params.id })
    .then(() => res.redirect('/movies'))
    .catch((error) => console.log(error));
});


router.get('/edit/:id', (req, res) => {
  Movies.findOne({ _id: req.params.id })
    .then((movie) => res.render('movie-edit', { movie }))
    .catch((error) => console.log(error));
});
router.post('/edit/:id', (req, res) => {
  const {
    title, director, description, stars, image,
  } = req.body;
  console.log(stars);
  Movies.findOne({ _id: req.params.id })
    .then((movie) => {
      movie.title = title;
      movie.director = director;
      movie.description = description;
      movie.stars = stars;
      movie.image = image;
      return movie.save();
    })
    .then(() => res.redirect(`/movie/${req.params.id}`))
    .catch((error) => console.log(error));
});

module.exports = router;
