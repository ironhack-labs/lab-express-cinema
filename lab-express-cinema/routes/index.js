const express = require('express');
const Movie = require("../models/movie.js");
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/movies',(req,res,next)=>{
//         res.render('movies.hbs')
//     })

router.get('/movies',(req,res,next)=>{
  Movie.find()
    .then(movies => {
      res.render('movies.hbs')
    })
    .catch((err)=> {
      next (err);
    });
});

// // To link here it's "/read?b=9999"
// router.get("/watch",(req,res,next)=>{
//   // const b = req.query.b
//   const{m}=req.query;
//   // Book.findOne({_id : b})
//   Movie.findById(m)
//   .then((movieDoc)=>{
//     res.locals.movieItem = movieDoc;
//     res.render("book-details.hbs")
//   })
//   .catch((err)=>{
//     // show error pages
//     next(err);
//   })
// })

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movieResults) => {
      // send the database results to the view as "bookArray"
      res.locals.movieArray = movieResults;
      res.render("movies.hbs")
    })
    .catch((err) => {
      // show our error page
      next(err);
    });
});

module.exports = router;
