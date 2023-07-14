const Movie = require('../models/Movie.models')

const router = require('express').Router()


//all movies
router.get('/', (req, res, next) =>{
  Movie.find()
  .then(movies => {

    res.render('movies', {movies});
  })
  .catch(error=> {
    console.error(error)
  })
});

// movie detail 
router.get('/:id', (req, res) => {
  const {id} = req.params

  Movie.findById(id)
  .then(movie => {

    res.render('movie', movie)
  })
  .catch(error => {
    console.log(error)
  })
})


module.exports = router