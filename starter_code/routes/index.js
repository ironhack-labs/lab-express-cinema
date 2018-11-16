const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {

  Movie.find({})
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      console.log('Error loading the movies from the database:' + err)
    })
})


router.get('/movie/:id', (req, res, next) => {
  console.log('entra');
  console.log(req.params.id);
  let movieId = req.params.id;

  Movie.findById(movieId)
    .then((data) => {
      console.log(data);
      res.render('movie',{data});
    })
    .catch(()=>{
      console.log("Error finding the movie/ rendering the details site.")
    })

})

module.exports = router;
