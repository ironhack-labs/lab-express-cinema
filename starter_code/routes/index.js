const express = require('express');
const router = express.Router();
const Movies = require("../Models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
      Movies.find().select({
        title: 1,
        image: 1
      }).then(movie => {
        console.log(movie)
        res.render('movies', {movie});
      });
    });

    router.get('/movie/:id', (req, res, next) => {
      Movies.findById(req.params.id).then(movie => {
        console.log(movie)
        res.render('movie', movie);
      });
    });

      module.exports = router;