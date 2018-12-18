const express = require('express');
const router  = express.Router();
const  Movie = require('../models/movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find().then((movies) => {
    console.log("MOVIES TEST", movies)
    res.render('movies', { moviesArray: movies });
    })
})

router.get("/movieinfo/:movieid", (req, res) => {
  Movie.findOne({ _id: req.params.movieid }).then(movies => {
    res.render("movieinfo", { moviesArr: movies });
  });
});	

module.exports = router;
