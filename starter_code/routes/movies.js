const express = require("express");
const mongoose = require("mongoose");
const Movie = require('../models/Movie');

const router = express.Router();

router.get('/', (req, res, next) =>{
  Movie.find({}, {title: 1, image: 1}) //El 1 indica que quiero que me incluya todos
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({
        text: "Error en el servidor",
        err: err
      })
    })
});

router.get('/search', (req, res, next) => { //Sirve para búsquedas de parámetros dinámicos
  console.log(Object.keys(req.query)) //Object.keys te da la certidfumbre de que tipo de información viene en el query
})

router.get('/:id', (req, res, next) =>{
  Movie.findById({
    _id: req.params.id
  })
  .then(theMovie => {
    res.status(200).json(theMovie)
  })
  .catch(err => {
    res.status(500).json({
      text: "Error en el servidor",
      err: err
    })
  })
});

router.post('/', (req, res, next) => {
  //Vamos a recibir datos de las peliculas
  //Titulo: String, foto: string
  let titulo = req.body.titulo
  let foto = req.body.foto
    Movie.create({title: titulo, image: foto})
    .then((movie) => {
      res.status(200).json({text: 'OK'})
    }).catch(err => {
      res.status(500).json({text: 'Error', err})
    })
})

module.exports = router;