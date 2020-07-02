const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model.js')

/* GET movie page */
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Movie.findById(id).then((data) => {
    console.log('la pelicula seleccionada', data)
    res.render('movie', {
      title: data.title,
      director: data.director,
      stars: data.stars,
      image: data.image,
      description: data.description,
      showtimes: data.showtimes
    })
  })
})

module.exports = router
