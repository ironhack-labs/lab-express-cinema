const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie.js')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(movies =>{
    res.render('movies', {movies})
  })
  .catch(err =>{
    console.log(err)
  })})


  router.get('/movies/:id', (req, res, next) => {
    let infoMovie = req.params.id;
    Movies.findById(infoMovie)
      .then(myId => {
        res.render('info', {myId})
      })
      .catch(err =>{
      console.log(err)
    })
  })

module.exports = router;
