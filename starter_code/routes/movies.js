const express = require("express");
const mongoose = require("mongoose");
const Movie = require('../models/Movies');



const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({}, {
    title:1,
    image:1
  })
  .then(resultado =>{
    console.log(resultado);
    res.json((resultado));
  })

  router.get('/:id',(req,res) => {
    Movie.findById({
      _id: req.params.id 
    }).then(resultado => {
      
      //res.render("movies","resultado")
      res.json(resultado)
    })
  });
  
});
module.exports = router;