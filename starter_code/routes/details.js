const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie')


router.get('/:id', (req, res, next) =>  {
  
    Movie.findById(req.params.id)                                                       // ESTO ES EL MODELO
    .then(movie => {
      console.log(movie)
      res.render('details', {movie})
    })           // ESTO ES LA VISTA
    .catch(error => console.log(error))
  

})

module.exports = router
