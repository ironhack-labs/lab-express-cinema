const express = require('express');
const router  = express.Router();
const movies= require('../models/Movie')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');

});

router.get('/movies', (req, res, next) => {
movies.find()
.then(moviesAll => {  
  res.render('movies',{ moviesAll });
}) 
});

router.get('/movies/:title', (req, res, next) => {
  const { title } = req.params
  movies.findOne({ title })
  .then(movieSelected => {
    const {title, image, director, description, stars, showtimes} = movieSelected
    console.log(movieSelected);      
    res.render('movie_details', {title, image, director, description, stars, showtimes});
  }) 
  });


module.exports = router;
