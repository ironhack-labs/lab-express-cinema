const router = require('express').Router();
const Movie = require('../models/Movie.model.js')
 
// GET route to retrieve and display all the books
router.get('/movies', (req, res) => {
    Movie.find()
    .then(movie => {
        res.render('movies/movies.hbs', { movie: movie })
    })
});

router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params

    Movie.findById(id)
    .then(movieDet => {
        res.render('movies/movies-details.hbs', { movieDet })
    })
    .catch(error => {
        console.log('Error while retrieving book details: ', error);
        // Call the error-middleware to display the error page to the user
        next(error);
    });

})
 
module.exports = router;