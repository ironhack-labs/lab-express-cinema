const express = require('express');
const router  = express.Router();
const moviesModel = require('../models/Movie');
const movies = require('../bin/seed');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// router.get("/movies",(req,res)=>{
//   const movie = moviesModel.find({title:moviesModel.title , image:moviesModel.image});
//   console.log("ho ho",moviesModel.title, 'hey hey');
//  res.render("movies",{ movie });
// });

router.get("/movies",(req,res)=>{ 
   moviesModel.find()
  .then(dbRes =>{
  console.log(dbRes);
  res.render("movies",{ movies : dbRes});
}).catch(dbErr =>{
  console.log(dbErr);
});
})


router.get("/movies/:title",(req,res)=>{
  const foundMovie = moviesModel.filter(movie => movies.title === req.moviesModel.title)[0];
   res.render("movies_details"
  //  ,{
  //      movies: foundMovie
  //  }
   );  
});

module.exports = router;
