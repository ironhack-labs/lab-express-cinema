const Movie = require('../models/Movie.model')

const router = require('express').Router()

//CREATE
// router.get('/books/create', (req,res)=>{
//     res.render('books/create')
// })

// router.post('/books/create', (req,res)=>{
//     console.log(req.body)
//     const {title,author,description,rating} = req.body
//     Book.create({title:title,author:author,description:description, rating:rating})
// })

//read
//route params are used to display individual resources like 1 book
router.get('/movies/:movieId',(req,res)=>{
    console.log(req.params)
    Movie.findById(req.params.movieId)
    .then((result)=>{
        console.log(result)
        res.render('movies/movie-details', result)
    })
})

router.get('/movies', (req,res)=> {
    Movie.find()
    .then((result)=>{
        console.log(result)
        res.render('movies/movies-list',{result})
    })
})




module.exports = router