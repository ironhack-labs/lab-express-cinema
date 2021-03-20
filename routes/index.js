const express = require('express');
const Movies = require('../models/Movies');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
    try {

        const movies = await Movies.find();
    
        res.render('movies', { movies });
    } catch (error) {
        console.log(error);
    }
});

router.get('/new', (req, res) => {
    res.render('newMovie');
});

router.get('/movie/:movieId', async (req, res) => {
    try {
        const { movieId } = req.params;
        const movies = await Movies.findById(movieId);

        res.render('movies-details', movies);

    } catch (error) {
        console.log(error);
    }
});

////Envio de formulário
router.post('/new', (req, res) => {
    const { movieTitle, movieDirector, movieStars, movieImg, movieDescription, movieTime } = req.body;

    const newMovie = {
        title: movieTitle,
        director: movieDirector,
        stars: movieStars,
        image: movieImg,
        description: movieDescription,
        showtimes: movieTime,
    };

    Movies.create(newMovie)
    .then(() => {
        res.redirect('/movies');
    }).catch(error => console.log(error));
});


module.exports = router;
