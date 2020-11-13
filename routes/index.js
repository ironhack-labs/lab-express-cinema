const express = require('express');
const router = express.Router();

//Importando del archivo modelo para usarlo aquí
const Movie = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

router.get('/movies', (req,res,next)=>{
    Movie.find({}, {title:1, image:1, _id:1})
    .then((movie) => {
      res.render('movies', {movie})
    })
    .catch((err) => { 
        console.log(err) 
        res.send(err)
    })
})

router.get("/movies/:id", (req, res, next)=>{
  const movieId= req.params.id

  Movie.findById(movieId)
  .then((result)=>{
    res.render("single-movie", result)
  })
  .catch((err)=>{
    res.send(err)
  })
})