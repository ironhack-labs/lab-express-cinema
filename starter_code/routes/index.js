const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('../views/index.hbs', (req, res, next) => {
  res.render('index');
});

module.exports = router;


//get Movies
router.get('/views/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      console.log(error)
    })
});


module.exports = router;