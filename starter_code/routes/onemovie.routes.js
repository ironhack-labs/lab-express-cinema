const express = require('express');
const router = express.Router();
const data = require("../bin/seed")
const Movies = require('../models/movies.model')



router.get('/:id', (req, res) => {
  console.log(req.params.id)
  Movies.findById(req.params.id)
    .then(aMovie => {
      //console.log(aMovie)
      res.render('onemovie', {
        movie: aMovie
      })
    })
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

/*
router.get('/details/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(theBook => res.render('books/bookDetails', {
      book: theBook
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});*/

module.exports = router;