const Movie = require('../models/Movie');
const express = require('express');
const router = express.Router();



/* GET users listing. */


router.get('/', function(req, res, next) {
  // res.render('movies', { title: 'Cinema Ironhack: Movies' });
                // res.send('respond with a resource');           testing funciona

  Movie.find()       // Queremos mostrar todas, por eso esta busqueda. Modelo la realiza
  .then((movies) => {
    res.render('movies',{"title": "Cinema Ironhack : Movies", "movies": movies});
  })
  .catch(error => {
    console.log(error)
  })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movie) => {
        res.render('movieDetail', {"title": `Cinema Ironhack : ${movie.title}`, "movie": movie})
    })
})

module.exports = router;