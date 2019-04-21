const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
/*GET Movies */
router.get('/movies',(req, res, next)=>{
  Movie.find()
  .then(allTheMoviesFromDB => {
    res.render('movies',{ allTheMoviesFromDB })

})
.catch(err => console.log(err))

})

router.get('/movies/:id',(req,res,next)=>{
  const{id} = req.params
  Movie.findById(id)
  .then(movie =>{
    console.log(movie)
    res.render('movie-detail', movie)
  })

})

module.exports = router