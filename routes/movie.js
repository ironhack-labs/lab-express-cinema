const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

router.get('/movies', (req, res, next) => {
    MovieModel.find()
      .then(everything => {
        console.log(everything)
        res.render('movies', {everything})
      })
      .catch(err => console.log(err))
  })


module.exports = router;