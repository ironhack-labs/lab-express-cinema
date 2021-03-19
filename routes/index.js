const express = require('express');
const Movies = require('../models/Movies')

const router = express.Router();


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req,res) => {
    const movies = Movies.find()
    .then(movies =>{
        res.render('movies',{movies})
    })
    .catch(error => console.log(error)); 
    
}) 

router.get('/new', (req,res) => {
    res.render('newMovie')
});

router.post('/new', (req,res) =>{
    const newMovie = req.body;

    Movies.create(newMovie)
        .then(() => {
            res.redirect('/movies')
        })
        .catch(error => console.log(error));
});

router.get('/movieDetails/:movieId', async (req, res) => {
    try {
        const {movieId} = req.params;
    
        const movie = await Movies.findById(movieId);
            
        res.render('movieDetails', movie);

    } catch (error) {console.log(error)};
});



module.exports = router;
