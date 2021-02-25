const express = require("express");
const router = express.Router();
const movieModel = require("./../models/Movie.model");

/*get to movies page*/

router.get("/",function(req,res,next){
    //console.log("this is req params", req.params);
    movieModel.find()
    .then((moviesDB)=> {
        console.log(moviesDB);
        res.render("movies.hbs",{movies: moviesDB});

    })
    .catch((error)=>{
        console.log(error);
    });
});

/*
router.get("/movie/:id",(req,res,next)=>{
    movieModel.findById(req.param.id)
    .then((movieDB)=>{
        res.render("detailmovie.hbs",{movies:movieDB});
    })
    .catch((error)=>{
        console.log(error);
    });
  });
*/

module.exports = router;

