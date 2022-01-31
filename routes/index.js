const express = require('express');
const router = express.Router();
const Movies = require("../models/movies.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movies.find()
    .then((allMovies) =>{
        res.render('movies', {movies: allMovies})
    })
    .catch((error)=>{
        console.log(error);
        next(error);
    })
});


router.get("/movies/:id", (req,res,next)=>{
const movieId = req.params.id;
  Movies.findOne({_id:movieId})
  .then((movie)=>{
      res.render("movie", {movie:movie});
  })
.catch((error)=>{
    console.log(err);
    next(error);
})

})

module.exports = router;
