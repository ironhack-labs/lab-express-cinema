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

// router.post('/:id', function (req,res, next){
//     const movieId=req.params.id;
//     if (movieId){
//         movieId.classList.remove("hidden");
        
//     }
//     .then((idResult) =>{
//         res.redirect("/movie");
//     })
//     .catch((error)=>{
//         next(error);
//     });
// });

module.exports= router;