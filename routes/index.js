const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req,res,next)=>{
Movie.find({})
.then(movies => {
  console.log('DEBUG title of the first movie:', movies[0])
  // req.books = books
  res.render('movies',{movies})
})
  console.log("We will render the /movies.hbs page")
})

router.get('/movie-detail/:movieId', (req,res,next) => {
  let movieId=req.params.movieId
  console.log("Debug the movieId is :", movieId)
  
  Movie.findById(movieId)
  .then(movieDoc => {
    console.log("Debug the movie detail is: ", movieDoc)
    res.render ("movie-detail",{movieDoc})
  })
  .catch(err => {throw err})

  // res.render('')

})


module.exports = router;
