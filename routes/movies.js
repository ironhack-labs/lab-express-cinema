const router=require("express").Router()
const Movie=require('../models/Movies.models')

//listado de pelis
router.get("/movies",(req,res)=>{
    Movie
    .find()
    .select('title')
    .then(movies=>
        //console.log(movies)
     res.render('moviesList',{movies})
       )
    console.log(movies)
    .catch(err=>console.log(err))
})