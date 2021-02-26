const express = require("express");
const router = express.Router();
const movieModel = require("./../models/Movie.model");

/*get to movies page*/

router.get("/",function(req,res,next){
    //console.log("this is req params", req.params);
    movieModel.find()
    .then((moviesDB)=> {
        //console.log(moviesDB);
        res.render("movies.hbs",{movies: moviesDB});

    })
    .catch((error)=>{
        console.log(error);
    });
});


router.get("/:id",(req,res,next)=>{
    movieModel.findById(req.params.id)
    .then((movie)=>{
        res.render("detailmovie.hbs",{movie});
    })
    .catch((error)=>{
        console.log(error);
    });
  });


module.exports = router;

