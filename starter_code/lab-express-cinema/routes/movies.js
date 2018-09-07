const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie')





/* GET movie page */
router.get('/movies', (req, res, next) => {

    Movie.find()
    .then((moviesData)=>{
        //console.log(theStuffWeGetBack);
        res.render('movies', {moviesData: moviesData})
    })
    .catch((err)=>{

    })

});


/* GET movieInfo page */
router.get('/moviesInfo/:theMovieID', (req, res, next) => {


    Movie.findById(req.params.theMovieID)
    .then((oneMovie)=>{
        console.log(oneMovie);
        res.render('movieInfo', {oneMovie: oneMovie})
    })
    .catch((err)=>{

    })

});



module.exports = router;