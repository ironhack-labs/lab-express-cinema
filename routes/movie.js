const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

router.get('/', (req, res, next) => {
    MovieModel.find()
      .then(everything => {
        console.log(everything)
        res.render('movies', {everything})
      })
      .catch(err => console.log(err))
  })

router.get('/:id',(req,res,next) => {
    const {id} = req.params
    MovieModel.findById(id)
    .then(oneMovie => {
        console.log(oneMovie)
        res.render('onemovie',oneMovie)
    })
    .catch(err => console.log(err))
})

module.exports = router;