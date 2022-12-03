const { Router } = require('express');
const express = require('express');
const { create } = require('hbs');
const router = express.Router();

const Movie = require("../models/Movie.model")

router.get("/",(req, res, next)=>{
    res.render("index");
})



router.get("/movies", (req, res, next) => {
    //Model.find()-->busca a todos los documentos dentro de esa collection
    Movie.find()
    .then(movies=>{
        // console.log("las movies", movies)
                                    //{movies: []}
        res.render("movies",{ movies });
    })
    .catch(error=>next(error))
  
});


router.get("/:id/detail", (req,res,next)=>{
    const {id} = req.params
    console.log(id)
    //Model.findById
    Movie.findById(id)
    .then(movie=>{
        res.render("movieDetails", { movie })
    })
    .catch(error=> next(error))

})


module.exports = router;