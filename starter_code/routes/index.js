const express = require('express');
const router  = express.Router();
const movieModel = require("./../models/Movie")


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  movieModel.find()
  .then(movies => {
    console.log(movies)
    res.render('movies', {movies});
  })
  .catch(errorDb => {
    console.log("error route movies", errorDb)
  })
})

module.exports = router;
