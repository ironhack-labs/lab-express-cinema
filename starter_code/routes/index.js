const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/add', (req, res, next) => {
  res.render('add');
});

router.post('/create-the-movie', (req, res, next)=>{
  let theTitle = req.body.title;
  let theDirector = req.body.director;
  let theImage = req.body.image;
  let theDescription = req.body.description;
  Movie.create({
    title: theTitle,
    director: theDirector,
    image: theImage,
    description: theDescription
  })
  .then((response)=>{
    res.redirect('/')
  })
  .catch((err)=>{
    next(err)
  })

})

router.get('/movieList', (req, res, next) => {
  Movie.find()
  .then((allMovies)=>{
    res.render('movieList', {theMovies: allMovies});
  })
  .catch((err)=>{
    next(err);
  })
});
router.get('/movies/:theIdOfMovie', (req, res, next)=>{
  let id = req.params.theIdOfMovie;
  Movie.findById(id)
  .then((theMovie)=>{
    res.render('singleMovie', {movie: theMovie})
  })
  .catch((err)=>{
    next(err);
  })
})
module.exports = router;
