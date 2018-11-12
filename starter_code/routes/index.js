

const express = require('express');
const router  = express.Router();

const Movies =require("../models/movie.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/movies",(req,res,next)=>{
  Movies.find()
  .then(movieResults => {
    console.log("IN MOVIES GET")
    res.locals.moviesArray = movieResults; 
   // res.send(movieResults);
    res.render('movies.hbs');
  })
  //"next()" skip to the error handler in "bin/www"
  .catch(err =>next(err));
  console.log("Can't get any movie")
  
});

router.get("/movie/:movieId",(req,res,next)=>{
  const{movieId} = req.params;
 // res.send(req.params);

  Movies.findById(movieId)
  .then(movieDoc =>{
    res.locals.movieItem =movieDoc;
    res.render("movies-details.hbs" );
  })
  .catch(err =>next(err));
})


module.exports = router;


































