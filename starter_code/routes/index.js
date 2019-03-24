const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
/* GET the movie Page */

router.get("/movies",(req,res)=>{
  Movie.find()
  .then(movies =>{
    res.render("movies", { movies });
  })
  .catch(err=>{
    console.log(err);
  })
  })

/* GET the Detailed Page*/

router.get("/detail/:id", (req,res) =>{
  const {id} = req.params;
  Movie.findById(id)
  .then(movie =>{
    res.render("detail",movie);
  })
} 
)

module.exports = router;
