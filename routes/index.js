const express = require('express');
const router = express.Router();

/* GET home page */

router.get('/', (req, res, next) => res.render('index'));



const movie = require('../models/Movie')

router.get("/movies", (req, res, next)=>{
    movie.find()
    .then((movieFromDB) => {
        console.log(movieFromDB)
        res.render("movies", { movieList: movieFromDB })
      })
    .catch((err) => {
       next(err)
    });
})

router.get("/movies/:id", (req,res,next)=>{
const movieId = req.params.id;
  movie.findById(movieId)
    .then((moviefromDB) => {
      res.render("movie", { Movie: moviefromDB });
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;