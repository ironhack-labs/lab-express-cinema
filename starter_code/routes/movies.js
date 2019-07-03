const express = require("express");
//const mongoose = require("mongoose");
const Movie = require('../models/Movies');



const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({},'title image')
    .then(data =>{
      res.status(200).json(data)
  })
    .catch(err => {
      res.status(500).json({
        text:"Error del servidor",
        err:err
      })
    })
  

  router.get('/:id',(req,res) => {
    Movie.findById(req.params.id)
      .then(theMovie => {
      res.status(200).json(theMovie)
      }).catch(err => {
res.status(500).json({
  text:"error del servidor",
  err:err

   })
  })
 })
});
  
module.exports = router;