const express = require('express');
const app = express();
const router = express.Router();
const Movies = require('../models/Movie.model')


app.use(express.urlencoded({ extended: false })) 
app.use(express.json())

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movies.find().then(movieDB => res.render('movies', {movieDB}))
})

router.get('/movie/:movieId', (req, res) => {
    const {movieId} = req.params
    
    Movies.find({_id : movieId})
        .then(movie => res.render('movie', {movie}))
        .catch(error => console.log("there was an error finding the movie", error))

})

module.exports = router;
