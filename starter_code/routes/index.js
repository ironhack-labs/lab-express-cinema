const express = require('express');
const router  = express.Router();
const Movie = require('./../models/Movie')


router.get('/', (req, res, next) => {
  res.render('index');
});

/* Se crea un get el cual redirigira a las movies
con una funcion asincrona la cual esperara dentro del await.
De ahi de Movie.find  mandara las cosas 

docs mongoDB
El find()método sin parámetros devuelve todos los documentos de una colección y devuelve todos los campos para los documentos.

*/
router.get('/movies', async (req, res) => {

  const movies = await Movie.find()

  /*http://expressjs.com/en/4x/api.html#app.render*/

  res.render('movies', {movies})
  console.log(movies)

})


router.get('/movie/:movieId', async (req, res) => {
  const { movieId } = req.params
  const movie = await Movie.find({_id: movieId})
  console.log(movie)
  res.render('movie', {movie})
})




module.exports = router;
