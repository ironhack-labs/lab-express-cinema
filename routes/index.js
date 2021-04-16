const express = require('express');
const { render } = require('../app');
const router = express.Router();
const Movie = require(`../models/Movie.model`)

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get(`/allMovies`,(req,res) => {
Movie.find({})
.then((result) => {
    const movieArr={movies:result};
    res.render(`allMovies`, movieArr)
    
}).catch((err) => {
    console.log(err); 
}); 
})
router.get(`/seeMovie/:_id`,(req,res) => {
Movie.findById(req.params)
.then((result)=>{
console.log(result)
res.render(`seeMovie`, {movie:result})
})
.catch((err)=>{
console.log(err)
})

})

module.exports = router;
