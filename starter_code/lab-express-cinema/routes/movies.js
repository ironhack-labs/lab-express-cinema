const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')

/*GET home page */

router.get ('/movies', (req, res, next)=>
{
  Movie.find()
  .then((movies) => {
    // console.log('$$$$$$$%%%%%%%%########')
    // console.log(movies)
    res.render('movies', {Movies: movies})
  })
  .catch((err) => {
    console.log(err)
  })
})

router.get ('/movies/:id', (req, res, next)=>
{
  console.log(req.params.id)
  Movie.findById(req.params.id)
  .then((theMovie)=> {
    console.log('#######################')
    console.log(theMovie);
    res.render('movie-id', {theMovie: theMovie})
  })
  .catch((err)=>{
    console.log(err)
  })
})

module.exports = router;