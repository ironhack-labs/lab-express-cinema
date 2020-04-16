const express = require('express');
const router  = express.Router();

const movieModel = require("../models/movie.js");

/* GET home page */
router.get('/', (req, res, next) => { 
  res.render('index.hbs');
});


router.get('/movies', (req, res) =>{
  movieModel.find({})
  .then ((dbResult)=>{
 res.render('movies.hbs', {
   movies: dbResult,
 })
  })
.catch((err)=>{console.log(err)
})
})

router.get('/:id', (req, res)=>{
  movieModel.findById(req.params.id)
  .then((dbResult)=>{
    res.render("eachMovie.hbs", {
      movies: dbResult,
    } )
  })
  .catch((err) => {
    console.log(err)
  })
})

module.exports = router;
