const express = require("express")
const router  = express.Router();
const Movie = require("../models/movie.js");

/* GET all movies */
router.get("/movies", (req, res)=> {
    Movie.find({})
        .then((movies) => {
            res.render("movies", {movies})
        })
        .catch((err)=> {
            res.send(err)
        })
})

/* GET one movie */
// router.get('/movie/:id', (req, res, next) => {
//     Movie.findById(req.params.id)
//     .then((movie) => {
//         res.render('movie', {movie})
//     })
//     .catch((err) => {
//         res.send(err)
//     })
// });

router.get('/movie', (req, res, next) => {
    Movie.findById(req.query.id)
    .then((movie) => {
        res.render('movie', {movie});
    })
    .catch((err) => {
        res.send(err);
    });
});


/* Create a movie */
router.get('/movies/create', (req, res, next) => { 
    res.render('create-movie');
});

router.post('/movies/create', (req, res, next) => { 
    const { title, director, stars, description, image } = req.body;
    const newMovie = new Movie({ title, director, stars, description, image });
    newMovie.save()
    .then((movie) => {
      res.redirect('/movies');
    })
    .catch((error) => {
      console.log(error);
    });
});


/* Delete a movie */
router.get('/movie/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.query.id)
    .then((movie) => {     
        res.redirect("/movies");
    })
    .catch((err) => {
        res.send(err)
    })
});

module.exports = router;
