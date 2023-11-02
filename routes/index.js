const express = require('express')
const router = express.Router()

const Movie = require("./../models/Movie.model")



router.get('/', (req, res,) => res.render('index'));


router.get('/movies', (req, res) => {



    Movie
        .find()
        .then(movie => {
            res.render('movies', { movi: movie })
        })
        .catch(err => console.log(err))

})

router.get('/movie/:movieId', (req, res) => {

    const { movieId } = req.params

    Movie
        .findById(movieId)
        .then(movie => {
            console.log(movie)
            res.render('movie', { movie })
        })
        .catch(err => console.log(err))
})





module.exports = router
