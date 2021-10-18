const router = require('express').Router();
const Movie = require('../models/Movie.model');


router.get('/movies', (req, res, next)=> {

    Movie
     .find()
     .then((moviesFromDB)=>{
        const data = {
           moviesArr: moviesFromDB
         }
         console.log(moviesFromDB);
        res.render("movies", data);
     })
     .catch((error)=>{
        console.log("Error getting list of books from DB", error);
        next(error);
     })
 
})


router.get('/movies/:movieId', (req, res) => {
   Movie.findById(req.params.movieId)
   .then((details) => {
      console.log('------->' + req.params);
      res.render('movieDetails', details)
   })
   .catch((error) => {
      console.log('An error occured, could not load movie details', error);
      next(error);
   });
})


module.exports = router;