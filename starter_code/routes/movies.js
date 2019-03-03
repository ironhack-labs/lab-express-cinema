const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')


router.get('/', (req, res, next) => {
  
  Movie.find()
  .then(movies => {
    // console.log(movies)
    res.render('movieslist', {movies});
  })
  .catch(err => console.log('Error', err))
  
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);

  Movie.findById(req.params.id)
    .then(movie=> {
      console.log(movie);
      res.render("movieInfo", {movie})
    })

})

module.exports = router;




