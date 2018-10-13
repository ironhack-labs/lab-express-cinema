const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res,)=>{
    Movie.find()
        .then(movies=>{
            res.render('movies', {movies})
        })
});

router.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            console.log(movie);
            res.render("movieDetail", {movie});
          })
        .catch(err => {
            console.log(err);
          })
});

module.exports = router;