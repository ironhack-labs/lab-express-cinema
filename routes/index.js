const express = require('express');
const router = express.Router();

/* GET home page */

const Movie = require('../models/Movies.model')
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {

    Movie
        .find()
        .select({ title: 1, image: 1 })
        .then(movieFromDB => {
            console.log({ movies: movieFromDB })
            res.render('movies', { movies: movieFromDB })
        })
        .catch(err => console.log(err))
})

router.get("/movies/:id", (req, res) => {
    const { id } = req.params;

    Movie.findById(id)
        .then((movieFromDB) => {
            res.render("details", movieFromDB);
        })
        .catch((err) => console.log(err));
});
// app.get("/mvoies", (req, res) => {

//     const { movies } = req.query

//     spotifyApi
//         .searchArtists(movies)
//         .then(data => {
//             res.render("movies", { director: data })
//         })
//         .catch(err => console.log(err));

// })

module.exports = router;
