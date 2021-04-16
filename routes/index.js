const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req,res)=>{
    Movie.find({})
    .then((result)=>{
    res.render('movies',{movie:result})
    })
    .catch((error)=>{
    console.log(error)
    })
})

// router.get('/movie/:_id',(req,res)=>{
//     console.log(req.params._id)
// })
router.get(`/movieInfo/:_id`,(req,res)=>{
    Movie.findById(req.params)
      .then((result)=>{
        res.render('movieInfo', {movie:result})
      })
      .catch((err)=>{
        console.log(err)
      })
  })

module.exports = router;
