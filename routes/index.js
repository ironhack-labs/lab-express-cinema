const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")


/* GET home page */
router.get('/', (req, res, next) => res.render("index"));
router.get( "/movies", (req,res, next) =>

Movie.find()
.then(data =>{
    
    res.render("movies",{data})
})

)

router.get("/movies/:id", (req,res) =>{
    console.log(req.params.id)
    Movie.findById(req.params.id)
    .then(data2 =>
        
        res.render("movie",data2,
        console.log(data2)
        ))

})
module.exports = router;
