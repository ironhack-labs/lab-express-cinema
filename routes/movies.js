const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie.model");

router.get('/movies', (req, res, next)=>{
   Movie.find().then((result) => {
    res.render("movies",{result})
   }).catch((err) => {
       
   });

})

router.get('/movie/:id',(req,res,next)=>{
    Movie.findById(req.params.id).then((result) => {
        res.render("detail",result)
       }).catch((err) => {
           
       });
    
})

module.exports = router;