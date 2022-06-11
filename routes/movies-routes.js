const router = require ("express").Router();
const Movie = require ("../models/Movie.model")

router.get("/list",(req,res,next)=>{

Movie.find()
.then (movies =>{

    res.render("movies",{movies})
})
.catch(error=>{
    console.log("Error",error)
})
})


router.get("/list/:movieId",(req,res,next)=>{

    const {movieId}= req.params;
 
 
    Movie.findById(movieId)
    .then((theMovie) => {
        res.render("details-movie.hbs",{movie:theMovie})
        console.log("llegamos al id",movieId)

})
    .catch(error => {
        console.log('Error while retrieving book details: ', error);
      });
  });

module.exports= router;