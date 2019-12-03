const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/all-movies', (req, res, next)=>{
  Movie.find()
  .then((allTheMovies)=>{
    res.render('movie_views/movies', {theMovies: allTheMovies});
  })
  .catch((err)=>{
    next(err);
  })
  
})

router.get('/add-new-movie', (req, res, next)=>{
  res.render('movie_views/new');
})


router.post('/create-the-movie', (req, res, next)=>{
  let theTitle = req.body.newMovieTitle;
  let theDirector = req.body.newMovieDirector;
  let theImg = req.body.img;
  let theDescription = req.body.newMovieDescription;
  


  Movie.create({
    title: theTitle,
    director: theDirector,
    image: theImg,
    description: theDescription,
  })
  .then((response)=>{
    res.redirect('/all-movies')
  })
  .catch((err)=>{
    next(err)
  })


})

router.get('/movies/:theIdOfTheMovie', (req, res, next)=>{
  let id = req.params.theIdOfTheMovie;

  Movie.findById(id)
  .then((theMovie)=>{
    res.render('movie_views/singleMovie', {movie: theMovie})
  })
  .catch((err)=>{
    next(err);
  })




})

module.exports = router;


