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

router.post('/', (req, res, next) => {
  let titulo = req.body.titulo
  let foto = req.body.foto
    Movie.create({title: titulo, image: foto})
    .then((movie) => {
      res.status(200).json({text: 'OK', data: movie})
    }).catch(err => {
      res.status(500).json({text: 'Error', err})
    })
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

router.put('/:id', (req, res, next) =>{
  let titulo = req.body.titulo
  let foto = req.body.foto
  
  Movie.findOneAndUpdate({_id: req.params.id}, {$set:{title: titulo, image: foto}}, (err, doc) => {
    res.status(200).json({text: 'Actualizado'})
    if (err) {
      res.status(500).json({
        text: "Error en el servidor",
        err: err
      });
    }
})
});

// router.put('/:id', (req, res, next) =>{
//   Movie.findByIdAndUpdate({_id: req.params.id})
//   let titulo = req.body.titulo
//   let foto = req.body.foto
//   Movie.create({title: titulo, image: foto})
//   .then(theMovie => {
//     res.status(200).json({text: 'Actualizado', data: theMovie})
//   })
//   .catch(err => {
//     res.status(500).json({
//       text: "Error en el servidor",
//       err: err
//     })
//   })
// });

module.exports = router;