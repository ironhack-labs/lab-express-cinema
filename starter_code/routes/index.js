const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {

  Movie.find().then(allMovies => {
    console.log(allMovies)
    res.render('movies.hbs', {moviesforhbsfile: allMovies});
  })
  
})

//movie/:id Movie findOne({_id:req.params.id}).then(.......)

router.get('/movie/:id', (req, res, next) => {
  console.log(req.params)
  Movie.findOne({_id:req.params.id}).then(oneMovie => {
    console.log(oneMovie)
    res.render('movie-detail.hbs', { movieDetails: oneMovie});
  })

})


module.exports = router;
