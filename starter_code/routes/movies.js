const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {movies: movies});
  })
});


router.post('/movie/:id/edit', (req,res,next) =>{
  const {director} = req.body;  //afecta el nombre que se le da a la variable ya que hace referencia al nombre del dato que le pasamos en el form
  const {id} = req.params;
  Movie.findByIdAndUpdate({_id: req.params.id}, {$set: {director}})
  .then(movie => {
    res.redirect('/movies/movie/${id}');  //hasta que no actualizo la pág no se ve el cambio de nombre...
  })
  .catch(next)
})

router.get('/movie/:id', (req, res, next) => {
  Movie.findOne({_id: req.params.id})  //hasta que no he mirado como se creaba el id (en este caso _id) no cargaban las movies...
  .then(movie => {
    res.render('movie', {movie});
  })
});

module.exports = router;