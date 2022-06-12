const router = require('express').Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies',(req,res,next)=> {
    Movie.find()
    .then(data=>{
        console.log('data',data)
        res.render('movies',{movies: data})
    })
    .catch(error => {
        console.log('Error',error)
        next(error);
    })
})

router.get('/movie/:movieId',(req,res,next)=>{
    const {movieId} = req.params 
    Movie.findById(movieId)
    .then(data => {
        res.render('theMovie',{movie: data})
    })
    .catch(error => {
        console.log('Error',error)
        next(error);
    })
})

module.exports = router;


