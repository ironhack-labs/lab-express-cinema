
var express = require("express");
const { geoSearch } = require('../models/Movie.model');
const Movie = require("../models/Movie.model");
var router = express.Router();


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


//mostrar
router.get('/movies', (req, res, next)=>{
  Movie.find().then((movie) => {
   res.render("movies",{movie})
  }).catch((err) => {

  });

})

router.get('/movie/:id',(req,res,next)=>{
   Movie.findById(req.params.id).then((movie) => {
       res.render("movie-detail", {movie})
      }).catch((err) => {

      });
})

module.exports = router;