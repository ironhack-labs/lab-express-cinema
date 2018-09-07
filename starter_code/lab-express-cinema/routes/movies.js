const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')


/* GET home page */
router.get('/movies', (req, res, next) => {

    Movie.find()
    .then((theStuffWeGetBack)=>{
        console.log(theStuffWeGetBack)
        res.render('listOfmovies', {listOfmovies: theStuffWeGetBack})
    })
    .catch((err)=>{

    })
});


router.get('/movies/:theMovieID', (req, res, next)=>{

    Movie.findById(req.params.theMovieID)
    .then((theActualMovie)=>{

        console.log('=-=-=-=-=-=-=-=-=-=--=-',theActualMovie)

        res.render('details', {theMovie: theActualMovie})

    })
    .catch((err)=>{

    })
    



})




module.exports = router;
