const express = require('express');
const Movie = require('../models/movie.js');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Movie.find()
  .then(movies =>{
    res.render('movies', {movies});
  })
  .catch(error =>{
    console.log('upsi: ', error)
  }) 
});

//Movie create
router.get('/new', (req, res, next) => {
  res.render('movies/create');
});

router.post('/', (req, res, next) => {
  const movie = req.body;
  Movie.create(movie)
  .then(() => {
    res.redirect('/movies');
  })
  .catch(error => {
    console.log(error);
  })
});

//Movie edit
router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id
  Movie.findById(id)
  .then(movie => {
    res.render('movies/edit', { movie });
  }) 
  .catch(error => {
    console.log(error);
  })
});

router.post('/:id', (req, res, next) =>{
  const movie = req.body;
  const id = req.params.id;
  Movie.findByIdAndUpdate(id, movie)
  .then(result => {
    res.redirect(`/movies/${id}`)
  })
  .catch(error => {
    console.log(error)
  })

})

//Movie delete
router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id
  Movie.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/movies')
  })
  .catch(error => {
    console.log(error)
  })

});

//Movie detail
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Movie.findById(id)
  .then(movie => {
    res.render('movie', { movie });
  }) 
  .catch(error => {
    console.log(error);
  })
});

module.exports = router;