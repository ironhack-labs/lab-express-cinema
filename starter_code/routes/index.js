const express = require('express');
const router  = express.Router();
const Movie=require("../models/movies");
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/movies', (req, res, next) => {
  Movie.find().then(movies=>{
    
    res.render('movies', {moviesList:movies});
  })

});

router.get("/movies/:movieID", (req,res,next)=>{
  let uniqmovie=req.params.movieID;
console.log(uniqmovie)
  Movie.findById(uniqmovie).then(movie=>{
    console.log(movie);
    res.render('movie.hbs', {oneMovie:movie});
  })
})
module.exports = router;
