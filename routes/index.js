const express = require('express');
const router = express.Router();
const Movies = require('./../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies',(req,res)=>{

     Movies
         .find()
         .then(movie =>{
            res.render('movies', { movie })
         })
        .catch(err => console.log(err))
       
})


router.get('/movie/:id',(req,res)=>{

   const {id} = req.params
   console.log(req.params)
   Movies
         .findById(id)
         .then(movie =>{
            console.log(movie)
           res.render('movie', { movie })
         })
        .catch(err => console.log(err))

}
)

module.exports = router;
