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
      module.exports = router;