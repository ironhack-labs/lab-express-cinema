const express = require("express");
const Movie = require("../models/Movie.model");
const { db } = require("../models/Movie.model");
const router = express.Router();


/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// router.get("/movies", (req, res, next) => res.render("movies"));



router.get("/movies", (req,res) => {
     
        // res.sendFile(__dirname + '/index.html');
        var cursor = db.collection('movies').find().toArray(function(err, result){
            
            if (err) { return console.log(err) }
            
            res.render('movies', result)
        
            return result
        })
})



module.exports = router;
