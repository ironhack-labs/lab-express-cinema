const express = require("express");
const mongoose = require("mongoose");
const Movie = require('../models/Movie');

const router = express.Router();

router.get('/', (req, res, next) =>{
  Movie.find({}, {title: 1, image: 1}) //El 1 indica que quiero que me incluya todos
    .then(resultado => {
      res.json(resultado);
    })
});

router.get('/:id', (req, res, next) =>{
  Movie.findById({
    _id: req.params.id
  }).then(resultado => {
    res.json(resultado)
  })
});

module.exports = router;