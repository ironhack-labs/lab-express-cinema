const express = require("express");
const Movie = require("../models/Movie.model");
const { db } = require("../models/Movie.model");
const router = express.Router();


/* GET home page */
router.get("/", (req, res, next) => res.render("index"));




router.get("/movies", (req,res) => {
     
        // res.sendFile(__dirname + '/index.html');
        const reqfromdb = db.collection('movies').find().toArray(function(err, result){
            
            if (err) { return console.log(err) }
            
            res.render('movies', {moviesfound: result})
        })
})

router.get( "/display/:id", (req, res) => {

    Movie.findById(req.params.id, function (err, resultofid){

        res.render('display', resultofid)

    }) 



})



module.exports = router;
