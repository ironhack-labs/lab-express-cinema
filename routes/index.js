
//Constants
const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//Nota**: REINICIAR al crear una nueva ruta si no funciona.

//Movies route

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

//Movie route 
router.get('/movies/:id', (req,res,next)=>{
  const movieId = req.params.id

  Movie.findById(movieId)
  .then((result)=>{
      res.render('movie', result)
      console.log("Showing")
  })

  .catch((err)=>{
      console.log(err)
      res.send(err)
  })
})

module.exports = router;