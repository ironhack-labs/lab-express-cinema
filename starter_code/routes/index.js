const express = require('express');
const router = express.Router();
const Movies = require('../models/movie.model')


/* GET home page */
//indica que si el navegador pide la pagina index "/", entregue la vista "index"
router.get('/', (req, res, next) => { // url
  res.render('index'); //hbs
});


router.get("/movies", (req, res, next) => {
  Movies.find()
    .then(allMovies => {
      // console.log(allMovies)
      res.render('movies', { movies: allMovies })

    })                   //siempre acepta un segundo parametro que tiene que ser un objeto, envia info
    .catch(err => console.log("Error consultando la base de datos de Movies"))
})

router.get("/movies/:theBookIdFromTheURL", (req, res, ) => {

  const theMovie = req.params.theBookIdFromTheURL

  Movies.findById(theMovie)
    .then(x => {
      console.log(x)
      res.render('movie-details', x)
    })
    .catch(err => console.log("Error consultando la pelicula en la BBDD: ", err))
})




// router.get("/movies", (req, res, next) => {

//   const beersData = [{ name: "cerve1" }, { name: "cerve2" }]                      //siempre acepta un segundo parametro que tiene que ser un objeto, envia info

//   res.render('movies', { beers: beersData }) 
// })

//importante exportarla siempre
module.exports = router;
