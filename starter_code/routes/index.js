const express = require('express');
const router = express.Router();
const movies = require("../models/movies.js")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
// get movies page
router.get('/movies', (req, res, next) => {
  movies.find()
    .then(allTheMovies => {
      console.log('Retrieved movies from DB:', allTheMovies);
      res.render('movies', { movies: allTheMovies });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
})
router.get('/movies/:id', (req, res, next) => {
  console.log(req.param.id)
  movies.findOne(req.param.id)
    .then(respuesta => {
      console.log(respuesta)
      res.render("pelicula", {respuesta})
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
}
)
module.exports = router;
