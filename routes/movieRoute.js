const express= require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

router.get ('/', function (req, res, next){
    Movie.find({})
    .then((movieResult)=>{res.render("movie.hbs", {movieResult});
})
.catch((error)=>{
    next(error);
});

});

router.get('/see-more/:id', function (req,res, next){
   Movie.findById(req.params.id)
    .then((idResult) =>{
        res.render("seeMore", {idResult});
    })
    .catch((error)=>{
        next(error);
    });
});

module.exports= router;