const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */

router.get("/", (req,res,next)=>{
    Movie.find()
    .then(movies => {
        console.log("peliculas", movies);
        res.render("movies",{ movies })
    })
    .catch(error=> console.log("Error!", error))
})

router.get("/:id/detail", (req,res,next)=>{
    const { id } = req.params
    Movie.findById(id)
    .then(movie => {
        res.render("details",{ movie })
    })
    .catch(error => console.log("Error!", error))
})


module.exports = router;