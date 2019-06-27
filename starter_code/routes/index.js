const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
});



router.get('/movies', (req, res, next) => {
  Movie.find({}).then(movies =>{
  //  console.log(movies);
    res.render('movies',{
      movies
    });
  })
});


// http://localhost:3000/movies/5d1505c54948f84b78aad9d6
router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id
  console.log('we are here')
  console.log('this is the id', req.params.id)
  Movie.findById(id).then(movieID =>{
    console.log(movieID)
    res.render('movieInfo',{
      movieID
     //movieName: movieID.title
    });
  })
});

module.exports = router;
