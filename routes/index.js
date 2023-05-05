const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req,res)=>{
  //  res.send("movies")
    Movie
    .find()            
    .then(movies => res.render('movies-page', { moviesFromDB : movies }))
    .catch(err => console.log(err))

})

router.get("/movie/:movieId", (req,res)=>{
   // res.send("MOVIE DETAIL")
       const { movieId } = req.params
        console.log("MOVIE ID----------", movieId)

    Movie
    .findById({_id: movieId})            
    .then(movie => res.render('movie-details',  movie ))
    .catch(err => console.log(err))

})


module.exports = router;
