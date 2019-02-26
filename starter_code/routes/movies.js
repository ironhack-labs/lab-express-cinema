const express = require("express");
const router = express.Router();
const Cinema= require("../models/Movies.js");

//connect to database cinema


router.get("/movies", (req, res) => {
    Cinema.find()
        .then((allCinema)=> {
            //render index page with all movies
            res.render('movies', {allCinema});
        })
        .catch((err)=>{
            console.log("error", err);
            next();
        });
});

//get celebrity by Id
router.get('/movies/:id', (req, res, next) => {
    //call findById, oneCelebrity it's just an identificator
    Cinema.findById(req.params.id)
        .then((oneMovie) => {
            //render page with a search's results
            res.render('movies/seemore.hbs', { oneMovie });
        })
        .catch((err) => {
            console.log('error: ', err);
        next();
        });
});


module.exports = router;