/*const express = require("express");
const router = express.Router();
const movieModel = require("./../models/Movie.model");

router.get("/movie/:id",(req,res,next)=>{
    movieModel.findById(req.param.id)
    .then((movieDoc)=>{
        console.log("going for details");
        res.render("detailmovie.hbs",{list:movieDoc});
    })
    .catch((error)=>{
        console.log(error);
    });
  });

module.exports = router;*/