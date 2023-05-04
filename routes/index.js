const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req,res, next) => {
    Movie
    .find()
    .then(movies =>{res.render('movies', { movies: movies })} )
    .catch(err => console.log(err))  
})

router.get('/movie-detail/:_id', (req, res, next)=> {

    let {_id} = req.params
    console.log("-----------------------",_id)
    Movie
    .findById(_id)
    .then(
        movie => {res.render('movie-list', movie), console.log(movie)}
    )
    .catch(err => console.log("errooooooooooor",err))
})

module.exports = router;
