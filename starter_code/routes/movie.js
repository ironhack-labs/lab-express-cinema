const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();


//Read
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', {
        movies, 
      });
    })
    .catch(err => console.log('Error while getting movies ', err))
});

router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movies => {
      res.render('movie-info', {
        movies
      })
    })

})


//Delete
router.post('/movies/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Movie.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(next);
});


//Create
router.get('/create', (req, res, next) => {
  res.render('create')
})

router.post('/create', (req, res) => {
  const newMovie = new Movie(req.body);
  Movie.insertMany(newMovie)
    .then(() => {
      res.redirect(301, '/movies')
    })
    .catch(next);
})



//Update
router.get('/movies/:id/update', (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .then(movie => {
      res.render('update', { movie });
    })
    .catch(next);
})

router.post('/movies/:id/update', (req, res, next) => {
  const updateMovie = req.body
  const updateId= req.params.id;
  Movie.updateOne({ _id: updateId }, updateMovie)
    .then(() => {
      res.redirect(301, '/movies')
    })  
    .catch(next);
});

module.exports = router;
