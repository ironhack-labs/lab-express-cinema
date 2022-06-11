const router = ('express').Router();

const Movie = require('../models/Movie.model')

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((allMovies) => { 
        console.log (allMovies);
        res.render('movies', {movies: allMovies});
     })
    .catch((err) => console.log(err))
    res.render('movies')
})

router.get('movie/:id', (req, res) =>
console.log(req.params.id)
Movie.findById(req.params.id)
res.render('movie-detals')
)
module.exports = router;