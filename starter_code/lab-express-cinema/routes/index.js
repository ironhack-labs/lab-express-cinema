const express = require('express');
const router  = express.Router();
const seeds = require("../bin/seeds.js")
const MovieObj = require("../models/Movie.js")
/* GET home page */
router.get('/', (req, res, next) => {

  res.render('index');
  
});

router.get('/movies', (req, res, next) => {
  MovieObj.find()
  .then(movies => {
    res.render('movies',{movies});
  })
  .catch(error => {
    console.log(error)
  })
  
});

router.get("/movies/:id", (req, res, next) => {
  let movieId = req.params.id
  MovieObj.findById(movieId)
  .then(mId => {
    res.render("movieinfo", {mId})
  })
  .catch(error => {
    console.log(error)
  })
})

module.exports = router;
